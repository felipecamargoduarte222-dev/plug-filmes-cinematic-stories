import logoBranca from "@/assets/plugfilmes-logo-branca.png.asset.json";
import logoCinza from "@/assets/plugfilmes-logo-cinza.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "branca",
  className,
}: {
  variant?: "branca" | "cinza";
  className?: string;
}) {
  return (
    <img
      src={variant === "branca" ? logoBranca.url : logoCinza.url}
      alt="Plug Filmes"
      width={888}
      height={228}
      className={cn("h-8 w-auto select-none", className)}
      draggable={false}
    />
  );
}
