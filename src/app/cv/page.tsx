// import ResumeViewer from "@/components/resume-viewer";
import dynamic from "next/dynamic";

const ResumeViewer = dynamic(() => import("@/components/resume-viewer"), {
  ssr: false,
  loading: () => (
    <div className="p-10 text-center">Carregando currículo...</div>
  ),
});

export default function CVPage() {
  return (
    <main className="bg-custom-brown dark:bg-[#252525] border-b border-[#121212] dark:border-custom-brown rounded-2xl p-8">
      <section className="container mx-auto">
        <ResumeViewer />
      </section>
    </main>
  );
}
