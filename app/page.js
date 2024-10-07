"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [host, setHost] = useState("Carregando...");

  useEffect(() => {
    // Faz uma requisição para a rota API para pegar o host
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
    <div>
      <h1>Identificação do Host</h1>
      <p>O acesso está vindo do domínio: {host}</p>
    </div>
  );
}
