"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryItem = {
  title: string;
  images: string[];
  cover: string;
  description: string;
};

const CONTACT = {
  whatsappNumber: "5511978396661", // troque pelo número real com DDI/DDC, sem espaços e sem símbolos
  instagramUrl: "https://www.instagram.com/primeluzesomjundiai?igsh=aWpmNXJzbnlsa3E2&utm_source=qr", // troque pelo seu @ real
  email: "primeluzsom@gmail.com", // troque pelo seu e-mail real
};

const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, vim pela Prime Luz & Som e gostaria de fazer um orçamento.";

const galleryItems: GalleryItem[] = [
  {
    title: "Backdrop",
    cover: "/images/backdrop.jpg",
    images: ["/images/backdrop.jpg", "/images/backdropp.jpg"],
    description:
      "Estrutura de backdrop para eventos corporativos, sociais e assembleias.",
  },
  {
    title: "Painel de LED",
    cover: "/images/painel.jpg",
    images: ["/images/painel.jpg", "/images/painelled.jpg"],
    description:
      "Painéis de LED para projeções, apresentações e impacto visual no evento.",
  },
  {
    title: "Totem de LED",
    cover: "/images/totem.jpg",
    images: ["/images/totem.jpg", "/images/totemm.jpg"],
    description:
      "Totem de LED para recepção, divulgação, sinalização visual e destaque em eventos.",
  },
];

const rentalItems = [
  "Microfone sem fio",
  "Totem de LED",
  "Backdrop",
  "Mesa de som",
  "Caixa de som",,
  "Praticáveis com carpete (palco)",
];

const serviceCategories = [
  {
    title: "Assembleia de Condomínio",
    items: [
      "Sonorização",
      "Gravação de áudio",
      "Projeção",
      "Transmissão online da reunião",
    ],
  },
  {
    title: "Eventos Corporativos",
    items: [
      "Sonorização",
      "Backdrop",
      "Totem de LED",
      "Projeção com painel de LED ou projetor",
      "Iluminação cênica",
      "Praticáveis com carpete (palco)",
    ],
  },
];

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export default function HomePage() {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allEquipmentCards = useMemo(
    () => [
      {
        title: "Painel de LED",
        image: "/images/painel.jpg",
        interactive: true,
      },
      {
        title: "Backdrop",
        image: "/images/backdrop.jpg",
        interactive: true,
      },
      {
        title: "Totem de LED",
        image: "/images/totem.jpg",
        interactive: true,
      },
      {
        title: "Mesa de Som",
        image: "/images/mesa.jpg",
        interactive: false,
      },
      {
        title: "Sonorização",
        image: "/images/som.jpg",
        interactive: false,
      },
    ],
    []
  );

  const openGallery = (title: string) => {
    const gallery = galleryItems.find((item) => item.title === title);
    if (gallery) {
      setSelectedGallery(gallery);
      setSelectedImage(gallery.images[0]);
    }
  };

  const openWhatsApp = (message: string) => {
    window.open(buildWhatsAppLink(message), "_blank");
  };

  return (
    <main className="bg-white text-zinc-900">
      <div className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 text-sm text-zinc-700 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-zinc-900">
              Prime Luz & Som
            </span>
            <a
              href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-zinc-900"
            >
              WhatsApp Comercial
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition hover:text-zinc-900"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-zinc-900"
            >
              Instagram
            </a>
          </div>

          <a
            href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center rounded-2xl bg-zinc-900 px-4 py-2 font-semibold text-white transition hover:opacity-90"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Evento profissional Prime Luz & Som"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              Mais de 40 anos de experiência em sonorização e iluminação cênica
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Som, luz e estrutura com a experiência que o seu evento precisa.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
              Atuando com soluções em sonorização, iluminação
              cênica e estrutura para eventos sociais, corporativos e assembleias.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#servicos"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg transition hover:scale-[1.02]"
              >
                Ver serviços
              </a>
              <a
                href="#equipamentos"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ver equipamentos
              </a>
              <a
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/30 bg-zinc-900/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            "Sonorização profissional",
            "Iluminação cênica",
            "Eventos corporativos e sociais",
            "Estrutura para assembleias e apresentações",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-zinc-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Sobre nós
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Tradição, confiança e excelência para cada evento.
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-600">
              Com mais de 40 anos de experiência no mercado, a Prime Luz & Som
              atua com excelência em sonorização, iluminação cênica e estrutura
              para eventos. Ao longo de sua trajetória, construiu credibilidade
              atendendo eventos corporativos, sociais e assembleias de condomínio,
              sempre com foco em qualidade, organização e resultado.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              Nosso compromisso é entregar soluções com acabamento profissional,
              atendimento cuidadoso e estrutura adequada para diferentes formatos
              de evento, valorizando cada detalhe da experiência do cliente.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Falar no WhatsApp
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                Ver Instagram
              </a>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Prime Luz & Som"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Serviços prestados
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Soluções pensadas para diferentes tipos de evento
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              Organização clara dos principais nichos atendidos pela empresa,
              com estrutura profissional para apresentações, reuniões e eventos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <h3 className="text-2xl font-semibold">{category.title}</h3>
                <ul className="mt-6 space-y-3 text-zinc-200">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      `Olá, vim pela Prime Luz & Som e gostaria de solicitar um orçamento para ${category.title}.`
                    )
                  }
                  className="mt-8 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:opacity-90"
                >
                  Solicitar orçamento deste serviço
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipamentos" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Equipamentos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-600">
            
            
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allEquipmentCards.map((card) => {
            const clickable = card.interactive;

            return (
              <div
                key={card.title}
                className={`group overflow-hidden rounded-3xl border border-zinc-200 bg-white text-left shadow-sm transition ${
                  clickable ? "hover:-translate-y-1 hover:shadow-xl" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => clickable && openGallery(card.title)}
                  className={`block w-full text-left ${
                    clickable ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600">
                      {clickable
                        ? "Clique para visualizar as imagens disponíveis."
                        : "Item disponível para composição da estrutura do evento."}
                    </p>
                  </div>
                </button>

                <div className="px-5 pb-5">
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsApp(
                        `Olá, vim pela Prime Luz & Som e gostaria de solicitar um orçamento para ${card.title}.`
                      )
                    }
                    className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                  >
                    Solicitar este item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="locacao" className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Locação
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Estrutura completa para diferentes necessidades
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              Itens disponíveis para compor eventos com qualidade, presença
              visual e suporte técnico profissional.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rentalItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm"
              >
                <p className="text-sm font-medium text-zinc-800">{item}</p>

                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      `Olá, vim pela Prime Luz & Som e gostaria de solicitar um orçamento para locação de ${item}.`
                    )
                  }
                  className="mt-4 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Solicitar no WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl bg-zinc-950 px-8 py-12 text-white shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Prime Luz & Som
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Mais de 40 anos entregando estrutura, confiança e presença para
                eventos que exigem qualidade.
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                Sonorização, iluminação cênica, painéis, backdrop, projeção,
                praticáveis e soluções sob medida para eventos sociais,
                corporativos e assembleias.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
              >
                <p className="text-sm text-zinc-400">WhatsApp</p>
                <p className="mt-1 font-semibold text-white">
                  Falar com atendimento comercial
                </p>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
              >
                <p className="text-sm text-zinc-400">E-mail</p>
                <p className="mt-1 font-semibold text-white">{CONTACT.email}</p>
              </a>

              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
              >
                <p className="text-sm text-zinc-400">Instagram</p>
                <p className="mt-1 font-semibold text-white">
                  Acompanhe nosso trabalho
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 rounded-full bg-zinc-900 px-5 py-4 text-sm font-semibold text-white shadow-2xl transition hover:scale-[1.03] hover:opacity-95"
      >
        WhatsApp
      </a>

      {selectedGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setSelectedGallery(null);
                setSelectedImage(null);
              }}
              className="absolute right-4 top-4 z-20 rounded-full bg-black px-3 py-2 text-sm font-semibold text-white"
            >
              Fechar
            </button>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[380px] bg-zinc-100">
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt={selectedGallery.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{selectedGallery.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {selectedGallery.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {selectedGallery.images.map((image, index) => (
                    <button
                      key={`${selectedGallery.title}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className={`relative h-28 overflow-hidden rounded-2xl border ${
                        selectedImage === image
                          ? "border-zinc-900 ring-2 ring-zinc-900"
                          : "border-zinc-200"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${selectedGallery.title} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      `Olá, vim pela Prime Luz & Som e gostaria de solicitar um orçamento para ${selectedGallery.title}.`
                    )
                  }
                  className="mt-6 w-full rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Solicitar este item no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}