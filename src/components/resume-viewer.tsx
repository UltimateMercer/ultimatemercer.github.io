"use client";

import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useLanguageStore } from "@/store/useLanguageStore";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const pdfPageStyle = `
  .react-pdf__Page {
    display: flex !important;
    justify-content: center !important;
    overflow: hidden !important;
  }
`;

export default function ResumeViewer() {
  const { language } = useLanguageStore() as { language: string };
  const [isMounted, setIsMounted] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isMounted]);

  if (!isMounted) return null;

  const pdfUrl =
    language === "pt-br"
      ? "/curriculo_julian_silva_da_cunha_pt.pdf"
      : "/curriculo_julian_silva_da_cunha_en.pdf";

  const pageWidth = Math.min(containerWidth, 800);

  return (
    <div className="flex flex-col items-center w-full gap-6">
      {/* Injeta o CSS corretivo para o react-pdf */}
      <style>{pdfPageStyle}</style>

      <div
        ref={containerRef}
        className="w-full max-w-4xl border rounded-xs overflow-hidden my-4"
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <div className="p-10 text-center">Carregando currículo...</div>
          }
        >
          {Array.from({ length: numPages }, (_, i) => (
            <div
              key={`page_${i + 1}`}
              className={i < numPages - 1 ? "mb-3" : ""}
            >
              <Page
                pageNumber={i + 1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                width={pageWidth}
              />
            </div>
          ))}
        </Document>
      </div>

      <a
        href={pdfUrl}
        download
        className="px-6 py-3 bg-[#252525] text-custom-brown dark:bg-custom-brown dark:text-[#121212] hover:underline rounded-lg font-semibold  transition shadow-md mb-5"
      >
        {language === "pt-br" ? "Baixar PDF" : "Download PDF"}
      </a>
    </div>
  );
}
