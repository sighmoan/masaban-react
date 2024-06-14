const Column = ({ columnTitle }: { columnTitle: string }) => {
  return (
    <>
      <h4 className="grid__column-title">{columnTitle}</h4>
    </>
  );
};

export default Column;
