import { cn } from "@/utils";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn("rounded-md bg-white/5 animate-pulse", className)} />
  );
}
