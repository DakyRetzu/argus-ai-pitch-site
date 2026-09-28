"use client";

import { useEffect, useRef } from "react";

type LightboxImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function LightboxImage({ src, alt, width, height, className }: LightboxImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClick = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close();
    };

    dialog.addEventListener("click", handleClick);
    return () => dialog.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`lightbox-trigger${className ? ` ${className}` : ""}`}
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Open larger view: ${alt}`}
      >
        <img src={src} width={width} height={height} alt={alt} loading="lazy" decoding="async" />
        <span className="lightbox-hint" aria-hidden="true">View larger</span>
      </button>

      <dialog ref={dialogRef} className="image-lightbox" aria-label={`Larger view: ${alt}`}>
        <button
          type="button"
          className="lightbox-close"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close image preview"
        >
          Close
        </button>
        <img src={src} width={width} height={height} alt="" />
      </dialog>
    </>
  );
}
