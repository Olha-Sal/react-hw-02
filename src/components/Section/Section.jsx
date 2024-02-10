// Компонент для відображення секції з заголовком і дітьми

export const Section = ({ title, children }) => {
  return (
    <section>
      <p className="title">{title}</p>
      {children}
    </section>
  );
};
