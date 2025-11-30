"use client"

import { useState } from "react"
import { User, ImageIcon } from "lucide-react"

export default function Step3({ data, onChange, onNext, onBack }) {
  const [documentPreview, setDocumentPreview] = useState(null)
  const isValid = data.panNumber && data.idDocument

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      onChange({ ...data, idDocument: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setDocumentPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="rounded-2xl border-2 border-gray-300 p-8 bg-white">
      <div className="space-y-6">

        {/* PAN Number */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">PAN Number</label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Enter PAN number"
              value={data.panNumber}
              onChange={(e) => onChange({ ...data, panNumber: e.target.value.toUpperCase() })}
              maxLength={10}
              className="w-full rounded-lg bg-gray-100 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">*Format: ABCDEI2345</p>
        </div>

        {/* ID Documents */}
        <div>
          <label className="mb-3 block font-medium text-gray-700">Choose ID Documents</label>
          <label className="cursor-pointer rounded-lg bg-gray-100 border border-gray-200 p-6 flex flex-col items-center justify-center gap-2 text-center transition hover:bg-gray-200">
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            
            {documentPreview ? (
              <>
                <img
                  src={documentPreview || "/placeholder.svg"}
                  alt="Document preview"
                  className="h-20 w-20 rounded object-cover"
                />
                <p className="text-sm text-gray-600">{data.idDocument?.name}</p>
              </>
            ) : (
              <>
                <ImageIcon className="h-10 w-10 text-gray-400" />
                <p className="text-gray-600">Choose Image</p>
              </>
            )}
          </label>
          <p className="mt-2 text-xs text-gray-500">*Upload Citizenship, Licence, or any government id (max 5 mb)</p>
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
            onClick={onNext}
            disabled={!isValid}
            className="flex-1 bg-red-600 py-6 text-base font-semibold text-white hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  )
}
