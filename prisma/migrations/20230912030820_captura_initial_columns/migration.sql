-- CreateTable
CREATE TABLE "Captura" (
    "id" TEXT NOT NULL,
    "id_criminoso" VARCHAR NOT NULL,
    "id_pais_capturado" VARCHAR NOT NULL,
    "id_pais_origem" VARCHAR NOT NULL,
    "data" DATE NOT NULL,
    "probabilidade" INTEGER NOT NULL,

    CONSTRAINT "Captura_pkey" PRIMARY KEY ("id")
);
