"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { partnershipSchema, type PartnershipFormData } from "@/lib/partnership-schema"
import { formatPhoneDisplay, normalizeEmail } from "@/lib/form-formatters"
import { siteEmail } from "@/lib/site"

const frequencies = [
  "One-time donation",
  "Monthly",
  "Quarterly",
  "Twice a year",
  "Unsure, would like to discuss",
]

const benefits = [
  {
    title: "We arrange pickup",
    description: "We coordinate directly with your facility and freight partners.",
  },
  {
    title: "No fee to participate",
    description: "There is no charge for pickup or coordination.",
  },
  {
    title: "A reply within two business days",
    description: "A member of our team will review your note and get back to you.",
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
      setSubmitError(`Form is not configured. Contact us at ${siteEmail}.`)
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
        result?.message ?? `We couldn't send your inquiry. Please try again or email ${siteEmail}.`,
      )
      return
    }

    setSubmitted(true)
    reset()
  }

  const inputClass =
    "w-full border-0 bg-paper px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-2 focus:outline-offset-0 focus:outline-brand-red"

  return (
    <section id="donate" className="scroll-mt-16 border-b border-black bg-paper py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold leading-none tracking-[-0.03em] sm:text-5xl">
            Got surplus?
          </h2>
          <p className="mt-4 leading-relaxed text-black/68">
            Send us a few details. We&apos;ll review your inventory and follow up within two business days.
          </p>
        </div>

        <div className="mt-10 grid border border-black bg-white lg:grid-cols-12">
          <div className="border-b border-black bg-black px-6 py-8 text-white md:px-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:px-9 lg:py-10">
            <p className="text-xl font-bold tracking-[-0.02em]">What to expect</p>
            <div className="mt-7 flex flex-col gap-6">
              {benefits.map((item) => {
                return (
                  <div key={item.title} className="grid grid-cols-[8px_1fr] gap-3">
                    <span className="mt-1.5 h-2 w-2 bg-brand-red" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="px-6 py-8 md:px-8 lg:col-span-8 lg:px-10 lg:py-10">
              {submitted ? (
                <div className="flex flex-col items-start gap-3 py-10">
                  <h3 className="text-lg font-semibold">We received your note</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-black/62">
                    Someone from the team will write back within two business days.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setSubmitError(null)
                    }}
                    className="mt-2 text-sm underline underline-offset-[3px] hover:text-brand-red"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
                  <div className="flex flex-col gap-5">
                    <h3 className="text-xl font-bold tracking-[-0.01em]">Your organization</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Institution" htmlFor="institutionName" required error={errors.institutionName?.message}>
                        <input
                          id="institutionName"
                          type="text"
                          placeholder="OhioHealth Riverside"
                          className={inputClass}
                          {...register("institutionName")}
                        />
                      </Field>
                      <Field label="Your name" htmlFor="contactName" required error={errors.contactName?.message}>
                        <input
                          id="contactName"
                          type="text"
                          placeholder="Jane Smith"
                          className={inputClass}
                          {...register("contactName")}
                        />
                      </Field>
                      <Field label="Role or title" htmlFor="role" required error={errors.role?.message}>
                        <input
                          id="role"
                          type="text"
                          placeholder="Supply chain manager"
                          className={inputClass}
                          {...register("role")}
                        />
                      </Field>
                      <Field label="Email" htmlFor="email" required error={errors.email?.message}>
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
                      <Field label="Phone" htmlFor="phone" className="sm:col-span-2" error={errors.phone?.message}>
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
                    <h3 className="text-xl font-bold tracking-[-0.01em]">Available supplies</h3>
                    <Field label="What supplies do you have?" htmlFor="supplyTypes" required error={errors.supplyTypes?.message}>
                      <input
                        id="supplyTypes"
                        type="text"
                        placeholder="Gloves, gauze, IV tubing, syringes, etc."
                        className={inputClass}
                        {...register("supplyTypes")}
                      />
                    </Field>
                    <Field label="How often do you expect to have surplus?" htmlFor="frequency" required error={errors.frequency?.message}>
                      <select id="frequency" className={inputClass} {...register("frequency")}>
                        <option value="">Select frequency</option>
                        {frequencies.map((f) => (
                          <option key={f} value={f}>
                            {f}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Anything else we should know?" htmlFor="message" error={errors.message?.message}>
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
                    <p className="text-sm text-brand-red" role="alert">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-red w-full sm:w-fit sm:min-w-48 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send inquiry"}
                  </button>
                </form>
              )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  required,
  error,
  className,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <label htmlFor={htmlFor} className="text-xs font-medium">
        {label}
        {required && <span className="ml-0.5 text-brand-red">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-brand-red">{error}</p>}
    </div>
  )
}
