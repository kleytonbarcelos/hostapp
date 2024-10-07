"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function SlugPage() {
  const { slug } = useParams(); // Captura a slug da URL
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Página de Slug</h1>
        <p className="mb-2">
          A slug da URL é: <strong>{slug}</strong>
        </p>
        <p>
          O acesso está vindo do domínio: <strong>{host}</strong>
        </p>
      </div>
    </div>
  );
}
