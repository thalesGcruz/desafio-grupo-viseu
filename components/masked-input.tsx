
interface MaskedInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function MaskedInput({
  value,
  onChange,
  placeholder = "00000-000",
  className = "",
}:  MaskedInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "")
    const maskedValue = rawValue.replace(/(\d{5})(\d{1,3})/, "$1-$2")
    onChange(maskedValue)
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      maxLength={9}
      placeholder={placeholder}
      className={`border border-gray-300 rounded px-4 py-2 ${className}`}
    />
  )
}

