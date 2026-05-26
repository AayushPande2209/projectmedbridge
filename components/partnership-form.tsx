"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { CheckCircle, Truck, ShieldCheck, Clock } from "lucide-react"
import { partnershipSchema, type PartnershipFormData } from "@/lib/partnership-schema"
import { formatPhoneDisplay, normalizeEmail } from "@/lib/form-formatters"

const frequencies = [
  "One-time donation",
  "Monthly",
  "Quarterly",
  "Twice a year",
  "Unsure, would like to discuss",
]

const benefits = [
  {
    icon: Truck,
    title: "We handle pickup",
    description: "One scheduled stop at your dock. No staff time on logistics.",
  },
  {
    icon: ShieldCheck,
    title: "No cost to you",
    description: "Free for your organization and aligned with donation protocols.",
  },
  {
    icon: Clock,
    title: "48-hour follow-up",
    description: "We read every inquiry and reply within two business days.",
  },
]

export default function PartnershipForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: { email: "", phone: "" },
  })

  const onSubmit = async (data: PartnershipFormData) => {
    setSubmitError(null)

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setSubmitError("Form is not configured. Contact us at pmedbridge@gmail.com.")
      return
    }

    const message = [
      `Institution: ${data.institutionName}`,
      `Contact: ${data.contactName}`,
      `Role: ${data.role}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone?.trim() || "Not provided"}`,
      `Supply types: ${data.supplyTypes}`,
      `Donation frequency: ${data.frequency}`,
      data.message?.trim() ? `\nAdditional notes:\n${data.message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Partnership inquiry — ${data.institutionName}`,
        from_name: data.contactName,
        name: data.contactName,
        email: data.email,
        replyto: data.email,
        phone: data.phone?.trim() || undefined,
        message,
        institution: data.institutionName,
        role: data.role,
        supply_types: data.supplyTypes,
        frequency: data.frequency,
      }),
    })

    const result = await response.json().catch(() => null)

    if (!response.ok || !result?.success) {
      setSubmitError(
        result?.message ?? "We couldn't send your inquiry. Please try again or email pmedbridge@gmail.com.",
      )
      return
    }

    setSubmitted(true)
    reset()
  }

  const inputClass =
    "w-full px-3 py-2.5 rounded-md border border-input bg-white text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"

  return (
    <section id="partnership" className="py-24 bg-white border-b border-border/35">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">Partner With Us</p>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — headline + what to expect */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance">
              Tell us what you have and we&apos;ll schedule a pickup.
            </h2>

            <div className="flex flex-col gap-6">
              {benefits.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-ice border border-border flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-brand-red" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-brand-ice flex items-center justify-center">
                    <CheckCircle size={28} className="text-brand-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Inquiry received</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                    Thanks for reaching out. Someone on our team will get back to you within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setSubmitError(null)
                    }}
                    className="mt-2 text-sm text-brand-red underline underline-offset-2 hover:text-brand-red-dark"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
                  <div className="flex flex-col gap-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Contact
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Institution" required error={errors.institutionName?.message}>
                        <input
                          id="institutionName"
                          type="text"
                          placeholder="OhioHealth Riverside"
                          className={inputClass}
                          {...register("institutionName")}
                        />
                      </Field>
                      <Field label="Your name" required error={errors.contactName?.message}>
                        <input
                          id="contactName"
                          type="text"
                          placeholder="Jane Smith"
                          className={inputClass}
                          {...register("contactName")}
                        />
                      </Field>
                      <Field label="Role / title" required error={errors.role?.message}>
                        <input
                          id="role"
                          type="text"
                          placeholder="Supply chain manager"
                          className={inputClass}
                          {...register("role")}
                        />
                      </Field>
                      <Field label="Email" required error={errors.email?.message}>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <input
                              id="email"
                              type="email"
                              inputMode="email"
                              autoComplete="email"
                              spellCheck={false}
                              placeholder="you@hospital.org"
                              className={inputClass}
                              value={field.value}
                              onChange={(e) => field.onChange(normalizeEmail(e.target.value))}
                              onBlur={field.onBlur}
                            />
                          )}
                        />
                      </Field>
                      <Field label="Phone" className="sm:col-span-2" error={errors.phone?.message}>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <input
                              id="phone"
                              type="tel"
                              inputMode="tel"
                              autoComplete="tel"
                              placeholder="(614) 555-0100"
                              className={inputClass}
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(formatPhoneDisplay(e.target.value))}
                              onBlur={field.onBlur}
                            />
                          )}
                        />
                      </Field>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Surplus details
                    </p>
                    <Field label="What supplies do you have?" required error={errors.supplyTypes?.message}>
                      <input
                        id="supplyTypes"
                        type="text"
                        placeholder="Gloves, gauze, IV tubing, syringes, etc."
                        className={inputClass}
                        {...register("supplyTypes")}
                      />
                    </Field>
                    <Field label="How often could you donate?" required error={errors.frequency?.message}>
                      <select id="frequency" className={inputClass} {...register("frequency")}>
                        <option value="">Select frequency</option>
                        {frequencies.map((f) => (
                          <option key={f} value={f}>
                            {f}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Anything else we should know?" error={errors.message?.message}>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Pickup constraints, volume estimates, questions..."
                        className={`${inputClass} resize-none`}
                        {...register("message")}
                      />
                    </Field>
                  </div>

                  {submitError && (
                    <p className="text-sm text-brand-red text-center" role="alert">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-md bg-brand-red text-white font-semibold text-sm hover:bg-brand-red-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  required,
  error,
  className,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <label className="text-xs font-medium text-foreground">
        {label}
        {required && <span className="text-brand-red ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-brand-red">{error}</p>}
    </div>
  )
}
