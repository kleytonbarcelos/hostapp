import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  const host = headersList.get("x-host") || "Host não identificado";

  return (
    <div>
      <h1>Identificação do Host</h1>
      <p>O acesso está vindo do domínio: {host}</p>
    </div>
  );
}
