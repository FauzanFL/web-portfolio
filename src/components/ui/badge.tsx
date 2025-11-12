interface BadgeFilterProps {
  className?: string;
  text: string;
}

function BadgeFilter({ className = "", text }: BadgeFilterProps) {
  return (
    <div
      className={
        className +
        " text-sm font-open-sans rounded-xl border border-border px-3 bg-card py-0.5 hover:cursor-pointer smooth-transition"
      }
    >
      {text}
    </div>
  );
}

export { BadgeFilter };
