"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2, Send, AlertCircle } from "lucide-react"

const services = [
  "Fire Detection & Alarm Systems",
  "Fire Extinguisher Supply & Servicing",
  "Sprinkler & Suppression Systems",
  "Fire Safety Training & Compliance",
  "Fire Equipment Maintenance Contracts",
  "Fire Hydrant Installation & Testing",
  "Other",
]

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!WEB3FORMS_ACCESS_KEY) {
      setError("This form isn't fully set up yet. Please call or WhatsApp us directly for now.")
      return
    }

    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Quote Request — Jero Fire Solutions Website",
      from_name: "Jero Fire Solutions Website",
      name: `${firstName} ${lastName}`.trim(),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      location: formData.get("location"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError("Something went wrong sending your request. Please try again, or contact us directly.")
      }
    } catch {
      setError("Something went wrong sending your request. Please try again, or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-xl bg-accent/10 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground">
          Your message has been received. Our team will get back to you within 24 hours with a detailed quotation and
          compliance-ready recommendations tailored to your site.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+27 00 000 0000" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Required *</Label>
        <Select name="service" required>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Project Location</Label>
        <Input id="location" name="location" placeholder="e.g., Sandton, Johannesburg" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please describe your site, timeline, and any specific fire safety requirements we should know..."
          rows={5}
          required
        />
      </div>

      {error && (
        <div className="flex items-start gap-3 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Request
          </>
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        By submitting this form, you agree to our privacy policy. We will never share your information with third
        parties.
      </p>
    </form>
  )
}
