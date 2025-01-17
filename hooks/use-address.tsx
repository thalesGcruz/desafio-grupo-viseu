import { useState } from "react"
import { strategiesApi } from "@/strategies/api-strategies"

type AddressData = {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

const useAddress = () => {
  const [address, setAddress] = useState<AddressData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchAddressByZipCode = async (zipcode: string) => {

    if (!zipcode.trim()) {
      setError("O CEP é obrigatório.")
      return
    }

    if (!/^\d{5}-?\d{3}$/.test(zipcode)) {
      setError("CEP inválido. Use o formato 00000-000.")
      return
    }

    setLoading(true)
    setError(null)
    setAddress(null)

    for (const strategy of strategiesApi) {
      try {
        const normalizedZip = zipcode.replace("-", "")
        const data = await strategy.fetchAddress(normalizedZip)
        setAddress(data)
        setLoading(false)
        return
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.warn(err.message)
        }
      }
    }

    setError("Não foi possível buscar o endereço. Tente novamente mais tarde.")
    setLoading(false)
  }

  return { address, loading, error, searchAddressByZipCode }
}

export default useAddress
