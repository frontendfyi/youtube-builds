import classNames from "classnames";

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames("min-h-screenHeightWithoutHeader", className)}>
    {children}
  </div>
);
