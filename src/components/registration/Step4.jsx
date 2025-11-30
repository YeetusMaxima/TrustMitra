"use client"

import { useState } from "react"
import { ImageIcon, Lock } from "lucide-react"

export default function Step4({ data, onChange, onSubmit, onBack }) {
  const [selfiePreview, setSelfiePreview] = useState(null)

  const isValid = data.selfie && data.password && data.confirmPassword && data.password === data.confirmPassword

  const handleSelfieChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      onChange({ ...data, selfie: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelfiePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="rounded-2xl border-2 border-gray-300 p-8 bg-white">
      <div className="space-y-6">
        {/* Upload Selfie */}
        <div>
          <label className="mb-3 block font-medium text-gray-700">Upload Selfie</label>
          <label className="cursor-pointer rounded-lg bg-gray-100 border border-gray-300 p-6 flex flex-col items-center justify-center gap-2 text-center transition hover:bg-gray-200">
            <input type="file" accept="image/*" onChange={handleSelfieChange} className="hidden" />
            {selfiePreview ? (
              <div className="space-y-2">
                <img
                  src={selfiePreview || "/placeholder.svg"}
                  alt="Selfie preview"
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                />
                <p className="text-sm text-gray-600">{data.selfie?.name}</p>
              </div>
            ) : (
              <div className="space-y-2">
                <ImageIcon className="mx-auto h-10 w-10 text-gray-400" />
                <p className="text-gray-600">Choose Image</p>
              </div>
            )}
          </label>
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">Enter Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <input
              type="password"
              placeholder="Enter password"
              value={data.password}
              onChange={(e) => onChange({ ...data, password: e.target.value })}
              className="w-full rounded-lg bg-gray-100 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <input
              type="password"
              placeholder="Confirm password"
              value={data.confirmPassword}
              onChange={(e) => onChange({ ...data, confirmPassword: e.target.value })}
              className="w-full rounded-lg bg-gray-100 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          {data.password && data.confirmPassword && data.password !== data.confirmPassword && (
            <p className="mt-1 text-xs text-red-600">Passwords do not match</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-6">
          <button
            onClick={onBack}
            className="flex-1 border-2 border-gray-300 bg-transparent py-6 text-base font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={onSubmit}
            disabled={!isValid}
            className="flex-1 bg-red-600 py-6 text-base font-semibold text-white hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
