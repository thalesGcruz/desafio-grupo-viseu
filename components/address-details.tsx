import { MapPinCheck, Clipboard, ClipboardCheck } from "lucide-react"
import { useState } from "react"

type AddressDetailsProps = {
  logradouro?: string
  bairro?: string
  localidade?: string
  uf?: string
}

export default function AddressDetails({ logradouro, bairro, localidade, uf }: AddressDetailsProps) {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const address = `
      Logradouro: ${logradouro || "N/A"}
      Bairro: ${bairro || "N/A"}
      Cidade: ${localidade || "N/A"}
      Estado: ${uf || "N/A"}
    `
    navigator.clipboard.writeText(address.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border-l-2 border-amber-400 bg-white px-5 rounded-lg mt-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-2 items-center flex-wrap">
          <MapPinCheck size={22}/>
          <h2 className="text-lg font-semibold">Endereço Encontrado</h2>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-cyan-600 hover:text-cyan-800 focus:outline-none"
        >
          {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          <span className="hidden md:block">
            {copied ? "Copiado!" : "Copiar"}
          </span>
        </button>
      </div>
      <p><strong>Logradouro:</strong> {logradouro}</p>
      <p><strong>Bairro:</strong> {bairro}</p>
      <p><strong>Cidade:</strong> {localidade}</p>
      <p><strong>Estado:</strong> {uf}</p>
    </div>
  )
}