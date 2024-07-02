interface BoxProps {
  children: React.ReactNode;
  className: any;
  style: any;
}

export const BoxReview = (props: BoxProps) => {
  const { children, className, style } = props;

  return (
    <main className="container">
      <section
        className={`flex w-[545px] h-[190px] rounded-[46px] bg-[#F5F5F5] p-8 relative shadow-2xl ${className}`}
        style={style}
      >
        <p className="text-[#d2ac47] absolute text-heading-2xl left-7 top-5">
          “
        </p>
        {children}
      </section>
    </main>
  );
};
