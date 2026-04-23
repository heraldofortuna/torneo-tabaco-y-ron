import { useCallback, useState, type RefObject } from "react";
import { toPng } from "html-to-image";

const CAPTURE_PIXEL_RATIO = 3;
const CAPTURE_BG = "#21222D";

export interface CapturePngButtonProps {
  captureRef: RefObject<HTMLElement | null>;
  /** Prefijo del archivo, p. ej. `tabla-posiciones`, `fecha-3` */
  filenamePrefix: string;
  disabled?: boolean;
  /** Texto accesible y tooltip */
  label?: string;
  title?: string;
}

const CapturePngButton: React.FC<CapturePngButtonProps> = ({
  captureRef,
  filenamePrefix,
  disabled = false,
  label = "Descargar sección como imagen PNG",
  title = "Guardar como imagen PNG (alta calidad)",
}) => {
  const [busy, setBusy] = useState(false);

  const onClick = useCallback(async () => {
    const el = captureRef.current;
    if (!el) return;
    setBusy(true);
    try {
      await new Promise((r) => requestAnimationFrame(() => r(null)));
      const dataUrl = await toPng(el, {
        pixelRatio: CAPTURE_PIXEL_RATIO,
        backgroundColor: CAPTURE_BG,
        cacheBust: true,
        style: {
          borderRadius: "0.5rem",
        },
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${filenamePrefix}-${new Date().toISOString().slice(0, 10)}.png`;
      a.click();
    } catch (err) {
      console.error("No se pudo generar la imagen:", err);
    } finally {
      setBusy(false);
    }
  }, [captureRef, filenamePrefix]);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || busy}
      className="shrink-0 inline-flex items-center cursor-pointer"
      aria-label={label}
      title={title}
    >
      <span className="text-sm" aria-hidden>
        📷
      </span>
    </button>
  );
};

export default CapturePngButton;
