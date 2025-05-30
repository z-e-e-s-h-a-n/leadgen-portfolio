import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface DetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tags?: string[];
  features?: string[];
  metrics?: { label: string; value: string }[];
  cta?: {
    label: string;
    href: string;
  };
}

export function DetailDialog({
  isOpen,
  onClose,
  title,
  description,
  tags,
  features,
  metrics,
  cta,
}: DetailDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[98vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl">{title}</DialogTitle>
          </div>
          <DialogDescription className="text-lg mt-4">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {features && (
            <div className="space-y-4">
              <h4 className="font-semibold">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {metrics && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {cta && (
            <div className="flex justify-end">
              <Button href={cta.href} className="group">
                {cta.label}
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
