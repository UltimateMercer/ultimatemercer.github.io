import { TypingAnimation } from "./magicui/typing-animation";

export const AboutMe = () => {
  return (
    <div className="container mx-auto">
      <TypingAnimation className="text-3xl font-bold leading-tight tracking-wide mb-3">
        Sobre mim
      </TypingAnimation>
      <p className="text-pretty text-lg mb-3">
        Atualmente, sou Desenvolvedor Front-end e estudante de Design Digital,
        tendo experiência com React e Vue.js. Em projetos pessoais, venho
        praticando com diferentes tecnologias de desenvolvimento web e
        explorando conceitos de design para aprender, aprimorar meus
        conhecimentos e unificar essas duas áreas na minha carreira
        profissional.
      </p>
    </div>
  );
};
