"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [host, setHost] = useState("Carregando...");

  useEffect(() => {
    fetch("/api/host")
      .then((res) => res.json())
      .then((data) => {
        setHost(data.host);
      })
      .catch(() => {
        setHost("Host não identificado");
      });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Página Principal</h1>
        <p>Visite qualquer rota para ver as slugs dinâmicas em ação!</p>
        <p>
          O acesso está vindo do domínio: <strong>{host}</strong>
        </p>
      </div>
    </div>
  );
}
