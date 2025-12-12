"use client";

import { useState } from "react";
import { useQuoteStore } from "@/lib/store/quoteStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, ShoppingCart, Plus, Minus, Trash2, Send, Mail } from "lucide-react";
import { toast } from "sonner";

export function QuoteCart() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, clearItems, getTotalItems, getTotalEstimate } = useQuoteStore();
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    eventName: "",
    eventDate: "",
    eventLocation: "",
    additionalNotes: "",
  });

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quotes/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          items: items,
          totalEstimate: getTotalEstimate(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send quote");
      }

      toast.success("Quote request sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });

      // Clear cart and close
      clearItems();
      setShowCheckout(false);
      closeCart();
      
      // Reset form
      setFormData({
        clientName: "",
        clientEmail: "",
        eventName: "",
        eventDate: "",
        eventLocation: "",
        additionalNotes: "",
      });
    } catch (error) {
      console.error("Failed to send quote:", error);
      toast.error("Failed to send quote request", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-black/95 backdrop-blur-lg border-l border-white/10 shadow-2xl transform transition-transform duration-300 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-white">
                Quote Cart ({getTotalItems()})
              </h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeCart}
              className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 p-0"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-16 w-16 text-white/20 mb-4" />
                <p className="text-white/60 text-sm">Your quote cart is empty</p>
                <p className="text-white/40 text-xs mt-2">
                  Add equipment from the rentals page
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-xs text-white/50 mt-0.5">
                          {item.category}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item._id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-7 w-7 p-0 shrink-0"
                        title="Remove item"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item._id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-7 w-7 p-0 border-white/20 bg-white/5 hover:bg-white/10"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item._id, parseInt(e.target.value) || 1)
                          }
                          className="h-7 w-12 text-center px-1 text-xs bg-white/5 border-white/10 text-white"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          className="h-7 w-7 p-0 border-white/20 bg-white/5 hover:bg-white/10"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-white/10 p-4 space-y-3">
              <div className="space-y-2">
                <Button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-primary text-black hover:bg-primary/90"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Request Quote
                </Button>
                <Button
                  variant="outline"
                  onClick={clearItems}
                  className="w-full border-white/20 text-white/70 hover:bg-white/10"
                  size="sm"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={closeCart}
        />
      )}

      {/* Checkout Dialog */}
      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-black/95 border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">Request Your Quote</DialogTitle>
            <DialogDescription className="text-white/70">
              Fill in your event details and we'll send you a detailed quote within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmitQuote} className="space-y-4 mt-4">
            {/* Equipment Summary */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h3 className="text-sm font-semibold text-white mb-3">Equipment Summary</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {items.map((item) => (
                  <div key={item._id} className="text-xs">
                    <div className="flex justify-between items-start">
                      <span className="text-white/90 font-medium flex-1">
                        {item.name}
                      </span>
                      <span className="text-primary font-semibold ml-2">
                        x{item.quantity}
                      </span>
                    </div>
                    <div className="text-white/50 text-[11px] mt-0.5">
                      {item.category}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 mt-3 pt-3">
                <p className="text-xs text-white/60 text-center">
                  Total: {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="clientName" className="text-white/90">
                  Your Name *
                </Label>
                <Input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) =>
                    setFormData({ ...formData, clientName: e.target.value })
                  }
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="clientEmail" className="text-white/90">
                  Email Address *
                </Label>
                <Input
                  id="clientEmail"
                  type="email"
                  value={formData.clientEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, clientEmail: e.target.value })
                  }
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Event Information */}
            <div>
              <Label htmlFor="eventName" className="text-white/90">
                Event Name *
              </Label>
              <Input
                id="eventName"
                value={formData.eventName}
                onChange={(e) =>
                  setFormData({ ...formData, eventName: e.target.value })
                }
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                placeholder="Corporate Conference 2025"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="eventDate" className="text-white/90">
                  Event Date *
                </Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) =>
                    setFormData({ ...formData, eventDate: e.target.value })
                  }
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
              <div>
                <Label htmlFor="eventLocation" className="text-white/90">
                  Event Location *
                </Label>
                <Input
                  id="eventLocation"
                  value={formData.eventLocation}
                  onChange={(e) =>
                    setFormData({ ...formData, eventLocation: e.target.value })
                  }
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  placeholder="Vancouver Convention Centre"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="additionalNotes" className="text-white/90">
                Additional Notes
              </Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) =>
                  setFormData({ ...formData, additionalNotes: e.target.value })
                }
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                placeholder="Any special requirements or questions..."
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowCheckout(false)}
                disabled={isSubmitting}
                className="flex-1 border-white/20 text-white/70 hover:bg-white/10"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary text-black hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Send Quote Request
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}



