"use client";

import { useEffect, useRef, useState } from "react";

import { demo, hero, media } from "@/content/site";

/**
 * The central proof element. No autoplay: a poster frame from the recording itself and a
 * clear play control. Without JavaScript the native controls are shown instead.
 */
export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => setEnhanced(true), []);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    video.play().catch(() => {
      // Playback was refused (e.g. power-saving mode); native controls are now visible.
    });
  };

  const { video } = media;
  const showOverlay = enhanced && !started && !failed;

  return (
    <figure className="demo" data-reveal>
      <div className="demo-frame" style={{ aspectRatio: `${video.width} / ${video.height}` }}>
        <video
          ref={videoRef}
          className="demo-video"
          width={video.width}
          height={video.height}
          poster={video.poster}
          preload="metadata"
          playsInline
          controls={!enhanced || started}
          aria-label={`${demo.heading} ${video.durationLabel}, no audio.`}
          onPlay={() => setStarted(true)}
        >
          {video.sources.map((source, index) => (
            <source
              key={source.src}
              src={source.src}
              type={source.type}
              onError={index === video.sources.length - 1 ? () => setFailed(true) : undefined}
            />
          ))}
          <a href={video.fallback}>{demo.heading}</a>
        </video>
        {showOverlay ? (
          <button type="button" className="demo-play" onClick={play}>
            <span className="demo-play-icon" aria-hidden="true" />
            <span className="demo-play-text">{hero.secondaryCta}</span>
            <span className="demo-play-time">{video.durationLabel}</span>
          </button>
        ) : null}
        {failed ? (
          <p className="demo-failed">
            <a href={video.fallback}>{demo.heading}</a>
          </p>
        ) : null}
      </div>
      <figcaption className="demo-caption">
        <p className="body-copy">{demo.description}</p>
        <p className="label demo-meta">{demo.meta}</p>
      </figcaption>
    </figure>
  );
}
