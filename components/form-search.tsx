'use client'

import { Search, Loader2, CircleAlert } from "lucide-react"
import { Button } from "./ui/button"
import  React, { useState, FormEvent } from "react"
import useAddress from "@/hooks/use-address"
import AddressDetails from "./address-details"
import MaskedInput from "./masked-input"

export default function FormSearch(){
  const [zipCode, setZipCode] = useState<string>('')
  const { address, loading, error, searchAddressByZipCode } = useAddress ()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    searchAddressByZipCode(zipCode)
    setZipCode('')
  }

  return(
    <>
      <form  onSubmit={onSubmit} className="flex gap-3 flex-wrap lg:flex-nowrap justify-center">
        <MaskedInput
          className="w-full"
          value={zipCode}
          onChange={setZipCode}
        />
        <Button
        type="submit"
        aria-busy={loading}
        disabled={loading}
        className="text-white h-12 w-full lg:w-auto">
          {loading ? <Loader2 className="animate-spin" /> : <Search /> }
          Buscar Endereço
        </Button>
      </form>
      {error &&
        <div className="flex items-center gap-2 mt-3 text-red-500">
        <CircleAlert size={16}/>
        <p>{error}</p>
      </div>}
      {address && (
        <AddressDetails
          logradouro={address.logradouro}
          bairro={address.bairro}
          localidade={address.localidade}
          uf={address.uf}
        />
      )}
    </>
  )

}