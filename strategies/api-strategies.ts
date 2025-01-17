type AddressData = {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

export type ApiStrategy = {
  fetchAddress: (zipcode: string) => Promise<AddressData>
}

export const viacepStrategy: ApiStrategy = {
  fetchAddress: async (zipcode: string) => {
    const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
    const data = await response.json()

    if (data.erro) throw new Error("CEP não encontrado.")

    return {
      logradouro: data.logradouro || "",
      bairro: data.bairro || "",
      localidade: data.localidade || "",
      uf: data.uf || "",
    }
  },
}

export const apicepStrategy: ApiStrategy = {
  fetchAddress: async (zipcode: string) => {
    const response = await fetch(`https://apicep.com/api-de-consulta/${zipcode}.json`)
    const data = await response.json()

    if (!data.address) throw new Error("CEP não encontrado.")

    return {
      logradouro: data.address || "",
      bairro: data.district || "",
      localidade: data.city || "",
      uf: data.state || "",
    }
  },
}

export const awesomeApiStrategy: ApiStrategy = {
  fetchAddress: async (zipcode: string) => {
    const response = await fetch(`https://cep.awesomeapi.com.br/json/${zipcode}`)
    const data = await response.json()
    if (response.status === 404) throw new Error("CEP não encontrado.")

    return {
      logradouro: data.address || "",
      bairro: data.district || "",
      localidade: data.city || "",
      uf: data.state || "",
    }
  },
}

export const strategiesApi: ApiStrategy[] = [viacepStrategy, apicepStrategy, awesomeApiStrategy]


