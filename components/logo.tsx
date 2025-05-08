export default function Logo({
  size = "default",
}: {
  size?: "small" | "default" | "large";
}) {
  const sizeClasses = {
    small: "h-6",
    default: "h-10 w-18",
    large: "h-12 w-auto",
  };

  return (
    <div className="flex items-center">
      <div className="pl-4">
        <img
          src="/DEVLogo.png"
          alt="Logo"
          className={`${sizeClasses[size]} object-contain`}
        />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-bold leading-tight text-sky-blue-600 dark:text-sky-blue-400 ${
            size === "small"
              ? "text-base"
              : size === "large"
              ? "text-2xl"
              : "text-lg"
          }`}
        >
          DEVRATH
        </span>
        <span
          className={`leading-tight text-dark-blue-600 dark:text-dark-blue-400 ${
            size === "small"
              ? "text-[10px]"
              : size === "large"
              ? "text-sm"
              : "text-xs"
          }`}
        >
          INDUSTRIES PVT LTD
        </span>
      </div>
    </div>
  );
}
