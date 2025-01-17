import FormSearch from "@/components/form-search"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="w-full mt-20 p-5">
      <Card className="m-auto max-w-[40rem] bg-white p-4">
        <CardHeader>
          <CardTitle className='flex gap-1 items-center text-2xl'>
            Consulte o Endereço pelo CEP
          </CardTitle>
          <CardDescription>
            Digite o CEP desejado para obter informações detalhadas do endereço de forma rápida e confiável
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormSearch />
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </main>
  );
}
