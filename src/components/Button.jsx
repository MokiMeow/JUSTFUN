import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, href, external, onClick }) => {
  const Component = href ? "a" : "button";

  return (
    <Component
      id={id}
      {...(href
        ? {
            href,
            target: external ? "_blank" : undefined,
            rel: external ? "noopener noreferrer" : undefined,
          }
        : { type: "button", onClick })}
      className={clsx(
        "group relative z-10 inline-flex w-fit cursor-pointer items-center overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </Component>
  );
};

export default Button;
