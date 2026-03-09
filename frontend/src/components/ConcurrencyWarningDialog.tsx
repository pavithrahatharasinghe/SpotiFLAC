import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ConcurrencyWarningDialogProps {
    open: boolean;
    onConfirm: () => void;
    onReduceToOne: () => void;
}

export function ConcurrencyWarningDialog({ open, onConfirm, onReduceToOne }: ConcurrencyWarningDialogProps) {
    return (
        <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen) onConfirm(); }}>
            <DialogContent className="max-w-md [&>button]:hidden">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        Rate-Limiting Warning
                    </DialogTitle>
                    <DialogDescription asChild>
                        <div className="space-y-3 text-sm">
                            <p>
                                Using multiple concurrent downloads may trigger <strong>rate-limiting</strong> from music
                                services including{" "}
                                <strong>Spotify, Tidal, Qobuz, Amazon Music, and Deezer</strong>.
                            </p>
                            <p>
                                Rate-limiting can cause download failures, temporary bans, or account suspension.
                                Service terms of use may also prohibit concurrent access.
                            </p>
                            <p>
                                It is recommended to start with <strong>1–3 concurrent downloads</strong> and only
                                increase gradually if needed.
                            </p>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex-col sm:flex-row gap-2">
                    <Button variant="outline" onClick={onReduceToOne} className="sm:flex-1">
                        Reduce to 1
                    </Button>
                    <Button onClick={onConfirm} className="sm:flex-1">
                        I Understand
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
