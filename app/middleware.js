import { headers } from "next/headers";

export default function Home() {
  // Captura os headers diretamente dentro do componente
  const headersList = headers();
  const host = headersList.get("host") || "Host não identificado";

  return (
    <div>
      <h1>Identificação do Host</h1>
      <p></p>
      <strong>{host}</strong>
    </div>
  );
}
