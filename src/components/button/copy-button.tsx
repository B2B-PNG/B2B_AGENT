import { useMultiCopy } from "@/hooks/components/use-multi-copy";
import { Copy, CopyCheck } from "lucide-react";

interface CopyButtonProps {
  value: string;
  field: string;
  className?: string;
  size?: number;
}

export const CopyButton = ({
  value,
  field,
  className,
  size,
}: CopyButtonProps) => {
  const { copied, copy } = useMultiCopy();

  const handleCopy = () => {
    copy(field, value);
  };

  return (
    <button
      disabled={copied[field]}
      onClick={handleCopy}
      className={`p-1 hover:bg-gray-700 rounded text-brand-500 transition-colors ${className}`}
    >
      {copied[field] ? (
        <CopyCheck size={size ?? 20} className="text-green-500 w-4 h-4" />
      ) : (
        <Copy size={size ?? 20} className="w-4 h-4 " />
      )}
    </button>
  );
};
