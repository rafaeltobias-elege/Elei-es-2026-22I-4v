import type { StaffMember, SchoolItem } from '../types.ts';

/**
 * Dados Oficiais do 22º BPM/I - Eleições Gerais 2026.
 * Inclui os 173 postos eleitorais e 128 policiais e funções de apoio/ronda.
 * Serve como base offline imediata para consulta instantânea sem necessidade de login.
 */
export const INITIAL_STAFF: StaffMember[] = [
  {
    "re": "ND-1",
    "name": "RODRIGO COSTA MENDES",
    "rank": "Ten Cel PM",
    "function": "Comandante",
    "local": "22º BPM/I",
    "phone": "15 997128179",
    "vehicle": "17-183",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-2",
    "name": "JOÃO PAULO DE MIRANDA",
    "rank": "Maj PM",
    "function": "Subcomandante",
    "local": "22º BPM/I",
    "phone": "15 996023341",
    "vehicle": "17-183",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-3",
    "name": "EDER VIEIRA BUENO",
    "rank": "Maj PM",
    "function": "Coordenador Operacional",
    "local": "22º BPM/I",
    "phone": "15 997386186",
    "vehicle": "17-183",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "120684-2",
    "name": "RAFAEL TOBIAS CARDENA",
    "rank": "Cb PM",
    "function": "Motorista Comandante",
    "local": "22º BPM/I",
    "phone": "15 997895888",
    "vehicle": "17-183",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "135951-7",
    "name": "EDUARDO RODRIGUES PEREIRA BRANCO",
    "rank": "Cb PM",
    "function": "Coordenador Operacional",
    "local": "22º BPM/I",
    "phone": "15 974027749",
    "vehicle": "I-40001",
    "shiftRaw": "06H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-6",
    "name": "Motorista Coordenador Operacional",
    "rank": "Cb PM",
    "function": "Motorista Coordenador Operacional",
    "local": "22º BPM/I",
    "phone": "",
    "vehicle": "I-40001",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-7",
    "name": "Motorista Coordenador Operacional",
    "rank": "Sd PM",
    "function": "Motorista Coordenador Operacional",
    "local": "40º BPM/I",
    "phone": "",
    "vehicle": "I-40001",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-8",
    "name": "Supervisão Eleições",
    "rank": "Cap PM",
    "function": "Supervisão Eleições",
    "local": "1ª e 3ª Cia",
    "phone": "",
    "vehicle": "I-40190",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-9",
    "name": "Motorista Supervisor Eleições",
    "rank": "Cb PM",
    "function": "Motorista Supervisor Eleições",
    "local": "1ª e 3ª Cia",
    "phone": "",
    "vehicle": "I-40190",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-10",
    "name": "Supervisão Eleições",
    "rank": "Cap PM",
    "function": "Supervisão Eleições",
    "local": "2ª Cia",
    "phone": "",
    "vehicle": "I-40300",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-11",
    "name": "Supervisão Eleições",
    "rank": "1º Ten PM",
    "function": "Supervisão Eleições",
    "local": "2ª Cia",
    "phone": "",
    "vehicle": "I-40300",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-12",
    "name": "Motorista Supervisor Eleições",
    "rank": "Cb PM",
    "function": "Motorista Supervisor Eleições",
    "local": "2ª Cia",
    "phone": "",
    "vehicle": "I-40300",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-13",
    "name": "Supervisão Eleições",
    "rank": "1º Ten PM",
    "function": "Supervisão Eleições",
    "local": "1ª e 3ª Cia",
    "phone": "",
    "vehicle": "I-40000",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-14",
    "name": "Motorista Supervisor Eleições",
    "rank": "Cb PM",
    "function": "Motorista Supervisor Eleições",
    "local": "1ª e 3ª Cia",
    "phone": "",
    "vehicle": "I-40000",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-15",
    "name": "Supervisão Eleições",
    "rank": "Cap PM",
    "function": "Supervisão Eleições",
    "local": "2ª Cia",
    "phone": "",
    "vehicle": "I-40241",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-16",
    "name": "Motorista Supervisor Eleições",
    "rank": "Sd PM",
    "function": "Motorista Supervisor Eleições",
    "local": "2ª Cia",
    "phone": "",
    "vehicle": "I-40241",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-17",
    "name": "Ronda Eleições",
    "rank": "1º Ten PM",
    "function": "Ronda Eleições",
    "local": "1ª e 3ª Cia",
    "phone": "",
    "vehicle": "I-40000",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-18",
    "name": "Motorista Ronda Eleições",
    "rank": "Cb PM",
    "function": "Motorista Ronda Eleições",
    "local": "1ª e 3ª Cia",
    "phone": "",
    "vehicle": "I-40000",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-19",
    "name": "Auxiliar Ronda Eleições",
    "rank": "Cb PM",
    "function": "Auxiliar Ronda Eleições",
    "local": "1ª e 3ª Cia",
    "phone": "",
    "vehicle": "I-40000",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-20",
    "name": "Ronda Eleições",
    "rank": "1º Ten PM",
    "function": "Ronda Eleições",
    "local": "2ª Cia",
    "phone": "",
    "vehicle": "22-1216",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-21",
    "name": "Motorista Ronda Eleições",
    "rank": "Cb PM",
    "function": "Motorista Ronda Eleições",
    "local": "2ª Cia",
    "phone": "",
    "vehicle": "22-1216",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-22",
    "name": "Ronda Eleições",
    "rank": "Asp PM",
    "function": "Ronda Eleições",
    "local": "1ª e 3ª Cia",
    "phone": "",
    "vehicle": "22-1217",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-23",
    "name": "Motorista Ronda Eleições",
    "rank": "Cb PM",
    "function": "Motorista Ronda Eleições",
    "local": "1ª e 3ª Cia",
    "phone": "",
    "vehicle": "22-1217",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-24",
    "name": "Auxiliar Ronda Eleições",
    "rank": "Sd PM",
    "function": "Auxiliar Ronda Eleições",
    "local": "1ª e 3ª Cia",
    "phone": "",
    "vehicle": "22-1217",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-25",
    "name": "Ronda Eleições",
    "rank": "Asp PM",
    "function": "Ronda Eleições",
    "local": "2ª Cia",
    "phone": "",
    "vehicle": "22-1216",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-26",
    "name": "Motorista Ronda Eleições",
    "rank": "Cb PM",
    "function": "Motorista Ronda Eleições",
    "local": "2ª Cia",
    "phone": "",
    "vehicle": "22-1216",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-27",
    "name": "Auxiliar Ronda Eleições",
    "rank": "Cb PM",
    "function": "Auxiliar Ronda Eleições",
    "local": "2ª Cia",
    "phone": "",
    "vehicle": "22-1216",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-28",
    "name": "Escolta de Autoridades",
    "rank": "1º Ten PM",
    "function": "Escolta de Autoridades",
    "local": "40º BPM/I",
    "phone": "",
    "vehicle": "I-40012",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-29",
    "name": "Motorista Escolta de Autoridades",
    "rank": "Cb PM",
    "function": "Motorista Escolta de Autoridades",
    "local": "40º BPM/I",
    "phone": "",
    "vehicle": "I-40012",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-30",
    "name": "Auxiliar Escolta de Autoridades",
    "rank": "Sd PM",
    "function": "Auxiliar Escolta de Autoridades",
    "local": "40º BPM/I",
    "phone": "",
    "vehicle": "I-40012",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-31",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "1ª Cia - Votorantim",
    "phone": "",
    "vehicle": "I-40100",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-32",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "1ª Cia - Votorantim",
    "phone": "",
    "vehicle": "I-40100",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-33",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "1ª Cia - Alumínio",
    "phone": "",
    "vehicle": "I-40140",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-34",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "1ª Cia - Alumínio",
    "phone": "",
    "vehicle": "I-40140",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-35",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "1ª Cia",
    "phone": "",
    "vehicle": "I-40100",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-36",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "1ª Cia",
    "phone": "",
    "vehicle": "I-40100",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-37",
    "name": "Escolta Promotor",
    "rank": "1º Sgt PM",
    "function": "Escolta Promotor",
    "local": "1ª Cia",
    "phone": "",
    "vehicle": "I-40111",
    "shiftRaw": "08H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-38",
    "name": "Motorista Escolta Promotor",
    "rank": "Cb PM",
    "function": "Motorista Escolta Promotor",
    "local": "1ª Cia",
    "phone": "",
    "vehicle": "I-40111",
    "shiftRaw": "08H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-39",
    "name": "Escolta Juiz Eleitoral",
    "rank": "1º Sgt PM",
    "function": "Escolta Juiz Eleitoral",
    "local": "1ª Cia",
    "phone": "",
    "vehicle": "I-40101",
    "shiftRaw": "08H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-40",
    "name": "Motorista Escolta Juiz Eleitoral",
    "rank": "Sd PM",
    "function": "Motorista Escolta Juiz Eleitoral",
    "local": "1ª Cia",
    "phone": "",
    "vehicle": "I-40101",
    "shiftRaw": "08H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-41",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "2ª Cia - Ibiúna",
    "phone": "",
    "vehicle": "I-40204",
    "shiftRaw": "06H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-42",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "2ª Cia - Ibiúna",
    "phone": "",
    "vehicle": "I-40204",
    "shiftRaw": "06H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-43",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "2ª Cia - Piedade",
    "phone": "",
    "vehicle": "I-40217",
    "shiftRaw": "06H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-44",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "2ª Cia - Piedade",
    "phone": "",
    "vehicle": "I-40217",
    "shiftRaw": "06H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-45",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "2ª Cia - Tapiraí",
    "phone": "",
    "vehicle": "I-40224",
    "shiftRaw": "06H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-46",
    "name": "Motorista CGP Eleições",
    "rank": "Sd PM",
    "function": "Motorista CGP Eleições",
    "local": "2ª Cia - Tapiraí",
    "phone": "",
    "vehicle": "I-40224",
    "shiftRaw": "06H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-47",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "3ª Cia - Araçoiaba da Serra",
    "phone": "",
    "vehicle": "I-40350",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-48",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "3ª Cia - Araçoiaba da Serra",
    "phone": "",
    "vehicle": "I-40350",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-49",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "3ª Cia - Araçoiaba da Serra",
    "phone": "",
    "vehicle": "I-40350",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-50",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "3ª Cia - Araçoiaba da Serra",
    "phone": "",
    "vehicle": "I-40350",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-51",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "3ª Cia - Iperó",
    "phone": "",
    "vehicle": "I-40330",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-52",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "3ª Cia - Iperó",
    "phone": "",
    "vehicle": "I-40330",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-53",
    "name": "CGP Eleições",
    "rank": "3º Sgt PM",
    "function": "CGP Eleições",
    "local": "3ª Cia - Iperó",
    "phone": "",
    "vehicle": "I-40330",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-54",
    "name": "Motorista CGP Eleições",
    "rank": "Sd PM",
    "function": "Motorista CGP Eleições",
    "local": "3ª Cia - Iperó",
    "phone": "",
    "vehicle": "I-40330",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-55",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "3ª Cia - Pilar do sul",
    "phone": "",
    "vehicle": "I-40311",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-56",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "3ª Cia - Pilar do sul",
    "phone": "",
    "vehicle": "I-40311",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-57",
    "name": "Auxiliar CGP Eleições",
    "rank": "Cb PM",
    "function": "Auxiliar CGP Eleições",
    "local": "3ª Cia - Pilar do sul",
    "phone": "",
    "vehicle": "I-40311",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-58",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "3ª Cia - Pilar do sul",
    "phone": "",
    "vehicle": "I-40311",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-59",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "3ª Cia - Pilar do sul",
    "phone": "",
    "vehicle": "I-40311",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-60",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "3ª Cia - Salto de Pirapora",
    "phone": "",
    "vehicle": "I-40312",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-61",
    "name": "Motorista CGP Eleições",
    "rank": "Cb PM",
    "function": "Motorista CGP Eleições",
    "local": "3ª Cia - Salto de Pirapora",
    "phone": "",
    "vehicle": "I-40312",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-62",
    "name": "Auxiliar CGP Eleições",
    "rank": "Cb PM",
    "function": "Auxiliar CGP Eleições",
    "local": "3ª Cia - Salto de Pirapora",
    "phone": "",
    "vehicle": "I-40312",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-63",
    "name": "CGP Eleições",
    "rank": "1º Sgt PM",
    "function": "CGP Eleições",
    "local": "3ª Cia - Salto de Pirapora",
    "phone": "",
    "vehicle": "I-40312",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-64",
    "name": "Motorista CGP Eleições",
    "rank": "Sd PM",
    "function": "Motorista CGP Eleições",
    "local": "3ª Cia - Salto de Pirapora",
    "phone": "",
    "vehicle": "I-40312",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-65",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "40º BPM/I",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-66",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "40º BPM/I",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-67",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "40º BPM/I",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-68",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "40º BPM/I",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-69",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "40º BPM/I",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-70",
    "name": "Apoio Administrativo",
    "rank": "Sd PM",
    "function": "Apoio Administrativo",
    "local": "40º BPM/I",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-71",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "Cia FT",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-72",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "Cia FT",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-73",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "1ª Cia - Votorantim",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-74",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "1ª Cia - Votorantim",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-75",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "2ª Cia - Ibiúna",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-76",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "2ª Cia - Ibiúna",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-77",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "2ª Cia - Ibiúna",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-78",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "2ª Cia - Ibiúna",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-79",
    "name": "Apoio Administrativo",
    "rank": "1º Sgt PM",
    "function": "Apoio Administrativo",
    "local": "2ª Cia - Piedade",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-80",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "2ª Cia - Piedade",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-81",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "2ª Cia - Tapiraí",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-82",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "2ª Cia - Tapiraí",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-83",
    "name": "Apoio Administrativo",
    "rank": "Sd PM",
    "function": "Apoio Administrativo",
    "local": "3ª Cia - Pilar do sul",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-84",
    "name": "Apoio Administrativo",
    "rank": "Sd PM",
    "function": "Apoio Administrativo",
    "local": "2ª Cia - Tapiraí",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-85",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "3ª Cia - Iperó",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-86",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "3ª Cia - Salto de Pirapora",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-87",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "3ª Cia - Salto de Pirapora",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-88",
    "name": "Apoio Administrativo",
    "rank": "Cb PM",
    "function": "Apoio Administrativo",
    "local": "3ª Cia - Araçoiaba da Serra",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Manhã - 06H ÀS 13H",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-89",
    "name": "Apoio Administrativo",
    "rank": "Sd PM",
    "function": "Apoio Administrativo",
    "local": "3ª Cia - Araçoiaba da Serra",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "ND-90",
    "name": "Apoio Administrativo",
    "rank": "1º Sgt PM",
    "function": "Apoio Administrativo",
    "local": "3ª Cia - Salto de Pirapora",
    "phone": "",
    "vehicle": "Sem Viatura",
    "shiftRaw": "Tarde - 13H ao Término",
    "unit": "22º BPM/I"
  },
  {
    "re": "111820-0",
    "name": "LUIZ ANTONIO DA SILVA JUNIOR",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "EE EDUARDO SOARES-PROF. (ALAMBARI)",
    "phone": "(15) 998583057",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "120767-9",
    "name": "DANIELA BUENO DE OLIVEIRA",
    "rank": "CB PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "EE EDUARDO SOARES-PROF. (ALAMBARI)",
    "phone": "(15) 996963092",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "149627-1",
    "name": "THIAGO MOMBERG BORBA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "COLÉGIO ALPIS VEREDAS (ITAPETININGA)",
    "phone": "(15) 991011228",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "139079-1",
    "name": "ANDRIELE VIEIRA DE CAMPOS",
    "rank": "1º Sgt PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "COLÉGIO ALPIS VEREDAS (ITAPETININGA)",
    "phone": "(15) 981761442",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "143613-9",
    "name": "THIAGO ALEXANDRE DE SOUZA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "COLÉGIO ANGLO (ITAPETININGA)",
    "phone": "(15) 981503552",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "111850-1",
    "name": "FABIO ROGERIO NOGUEIRA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "COLÉGIO ANGLO (ITAPETININGA)",
    "phone": "(15) 997765764",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "142596-0",
    "name": "LEANDRO CAVALCANTE COSTA",
    "rank": "Sd PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. JOSÉ BALTAZAR DE SOUZA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 981789478",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "108692-8",
    "name": "ROQUE ROBERTO DE OLIVEIRA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. JOSÉ BALTAZAR DE SOUZA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997517172",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "160679-4",
    "name": "LUIZ RICARDO PALMA SEVERINO",
    "rank": "CB PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. MASSANORI KARAZAWA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 996783408",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "181670-5",
    "name": "MARCELO GIOVANNI DAMIAO DO AMARAL",
    "rank": "Sd PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. MASSANORI KARAZAWA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 998402312",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "129255-2",
    "name": "NELSON NUNES VIEIRA JUNIOR",
    "rank": "1º Sgt PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. NESTOR FOGAÇA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997853231",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "192215-7",
    "name": "ROBERTA CAROLINA RODRIGUES DE OLIVEIRA",
    "rank": "Sd PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. NESTOR FOGAÇA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 981083660",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "162969-7",
    "name": "YRIS FERNANDA CONCEIÇAO FERREIRA",
    "rank": "Sd PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. PROFª MARIA ELISA DE OLIVEIRA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 998336766",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "145074-3",
    "name": "JOSIELE SIMONE DE LIMA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. PROFª MARIA ELISA DE OLIVEIRA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 981812848",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "131741-5",
    "name": "VANDERSON DE ALCANTARA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. PROFª MARIA FRANCISCA DEOCLECIO ARRIVABENE (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 996807216",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "162270-6",
    "name": "ALEXANDRA BEATRIZ OLIVEIRA ALMEIDA MAROTTA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. PROFª MARIA FRANCISCA DEOCLECIO ARRIVABENE (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 996637730",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "141997-8",
    "name": "EDSON RODRIGUES",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. SADAMITA IWASSAKI (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997892419",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "162203-0",
    "name": "DIOGO DO NASCIMENTO",
    "rank": "Sd PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.E. SADAMITA IWASSAKI (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997917742",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "123188-0",
    "name": "OLIMPIO TEOFILO DO ESPIRITO SANTO NETTO",
    "rank": "1º Sgt PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.F. JOSÉ GOMIDE DE CASTRO (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997197759",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "111090-0",
    "name": "IRINEU SOARES RODRIGUES",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.F. PROF. ARCYPRESTE RUGGERI (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 32793724",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "149334-5",
    "name": "THAIS CAMARGO",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.F. PROF. ARCYPRESTE RUGGERI (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 996605511",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "171941-6",
    "name": "JULIANA BARBARA AGOSTINHO DE CARVALHO",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I. PROF. PAULO ROBERTO ORTIZ DE CAMARGO (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997257520",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "991870-1",
    "name": "ANTONIO DO NASCIMENTO RIBEIRO",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I. PROF. PAULO ROBERTO ORTIZ DE CAMARGO (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997999741",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "142590-A",
    "name": "CARLOS ALBERTO DE QUEIROZ",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F.  PROFª CARMELITA VIEIRA TERRA DIAS (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 998253577",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "141612-0",
    "name": "GERSON QUIRINO DEMETRIO VIEIRA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F.  PROFª CARMELITA VIEIRA TERRA DIAS (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 998221120",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "111114-A",
    "name": "PAULO CESAR MOMBERG DE BARROS",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. ANGELINA MIGUEL ARUK (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997489085",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "152972-2",
    "name": "ADRIANO DE SOUZA",
    "rank": "Sd PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. FERMINO MENDES DA SILVA (SÃO MIGUEL ARCANJO)",
    "phone": "(19) 999842089",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "181609-8",
    "name": "BRUNO PEREIRA DA SILVA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. FERMINO MENDES DA SILVA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 998473745",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "157619-4",
    "name": "GIOVANE DA CRUZ QUEIROZ",
    "rank": "Sd PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. FROFª MARIA INÊS MARQUES MENDES (SÃO MIGUEL ARCANJO)",
    "phone": "(11) 996809090",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "147763-3",
    "name": "LEONARDO RIBEIRO CIPRIANO",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. FROFª MARIA INÊS MARQUES MENDES (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 998473208",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "111871-4",
    "name": "ANDERSON DE SOUZA DINIZ",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. JOAQUIM NUNES VIEIRA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997662956",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "120641-9",
    "name": "FERNANDO HENRIQUE DOS SANTOS",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. JOAQUIM NUNES VIEIRA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 992011440",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "146554-6",
    "name": "THIAGO JAKSON WALDOW SOTA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. PROF. ARANI JOSÉ DA SILVA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 996145704",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "162599-3",
    "name": "SILAS GABRIEL FERREIRA",
    "rank": "Sd PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. PROF. ARANI JOSÉ DA SILVA (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997980502",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "145469-2",
    "name": "ANDRE HENRIQUE LOPES DA COSTA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. PROFª THEREZA MARIA CUNHA BODO DE CARVALHO (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 996052825",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "120696-6",
    "name": "THIAGO AUGUSTO CAMPOS RAMOS CORREA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. PROFª THEREZA MARIA CUNHA BODO DE CARVALHO (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 991823355",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "991815-9",
    "name": "CRISTIANO EDUARDO POLES",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. VEREADOR JOÃO GATO (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 997581366",
    "shiftRaw": "06H às 13H (Manhã)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  },
  {
    "re": "127137-7",
    "name": "VANCLEI BENEDITO FOGACA",
    "rank": "Cb PM",
    "function": "Efetivo Local (Ponto Fixo)",
    "local": "E.M.E.I.F. VEREADOR JOÃO GATO (SÃO MIGUEL ARCANJO)",
    "phone": "(15) 96086088",
    "shiftRaw": "13H ao Término (Tarde)",
    "unit": "CPI-7 - 22.BPM/I - 1.CIA"
  }
];

export const INITIAL_SCHOOLS: SchoolItem[] = [
  {
    "id": "school-1",
    "school": "EE EDUARDO SOARES-PROF.",
    "city": "ALAMBARI",
    "bairro": "CENTRO",
    "address": "RUA IDIARTE MACIEL, S/N - CENTRO, ALAMBARI - SP, 18220-031",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "111820-0",
      "name": "LUIZ ANTONIO DA SILVA JUNIOR",
      "rank": "Cb PM",
      "phone": "(15) 998583057"
    },
    "pm": {
      "re": "120767-9",
      "name": "DANIELA BUENO DE OLIVEIRA",
      "rank": "CB PM",
      "phone": "(15) 996963092"
    }
  },
  {
    "id": "school-2",
    "school": "EMEF NIVALDO LÁZARO DO CARMO CUBAS",
    "city": "ALAMBARI",
    "bairro": "DISTRITO DO TATETU",
    "address": "RUA ITAPEVA, S/N - DISTRITO DO TATETU, ALAMBARI - SP, 18220-500",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-3",
    "school": "EMEIF LUCIANO JOSÉ RAMOS",
    "city": "ALAMBARI",
    "bairro": "CENTRO",
    "address": "RUA IDIARTE MACIEL, S/N - CENTRO, ALAMBARI - SP, 18220-031",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-4",
    "school": "EMEIF JOSE GRACA",
    "city": "ALAMBARI",
    "bairro": "CERCADINHO",
    "address": "RUA MARGARIDA 83 - CERCADINHO, ALAMBARI - SP, 18220-266",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-5",
    "school": "EMEIF TIAGO DE JESUS MARTINS",
    "city": "ALAMBARI",
    "bairro": "CERRADO",
    "address": "RUA SABIA SN - CERRADO, ALAMBARI - SP, 18220-993",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-6",
    "school": "COLÉGIO ALPIS VEREDAS",
    "city": "ITAPETININGA",
    "bairro": "CENTRO",
    "address": "RUA ANTONIO FOGAÇA DE ALMEIDA, 696 - CENTRO, ITAPETININGA - SP, 18200-095",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "149627-1",
      "name": "THIAGO MOMBERG BORBA",
      "rank": "Cb PM",
      "phone": "(15) 991011228"
    },
    "pm": {
      "re": "139079-1",
      "name": "ANDRIELE VIEIRA DE CAMPOS",
      "rank": "1º Sgt PM",
      "phone": "(15) 981761442"
    }
  },
  {
    "id": "school-7",
    "school": "COLÉGIO ANGLO",
    "city": "ITAPETININGA",
    "bairro": "VILA APARECIDA",
    "address": "RUA ANTONIO VIEIRA DE MORAES, 443 - VILA APARECIDA, ITAPETININGA - SP, 18201-490",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "143613-9",
      "name": "THIAGO ALEXANDRE DE SOUZA",
      "rank": "Cb PM",
      "phone": "(15) 981503552"
    },
    "pm": {
      "re": "111850-1",
      "name": "FABIO ROGERIO NOGUEIRA",
      "rank": "Cb PM",
      "phone": "(15) 997765764"
    }
  },
  {
    "id": "school-8",
    "school": "EE ASTOR VASQUES LOPES-PROF.",
    "city": "ITAPETININGA",
    "bairro": "JARDIM BRASIL",
    "address": "RUA  ANTONIO SOARES DA SILVA, 180 - JARDIM BRASIL, ITAPETININGA - SP, 18214-500",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-9",
    "school": "EE ATALIBA JÚLIO DE OLIVEIRA-PROF.",
    "city": "ITAPETININGA",
    "bairro": "VILA NOVA ITAPETININGA",
    "address": "AV. JOSÉ SANTANA DE OLIVEIRA, 116 - VILA NOVA ITAPETININGA, ITAPETININGA - SP, 18203-300",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-10",
    "school": "EE CARLOS EDUARDO MATTARAZZO CARREIRA-PROF.",
    "city": "ITAPETININGA",
    "bairro": "JARDIM BRASIL",
    "address": "RUA ANTONIO SOARES DA SILVA, 170 - JARDIM BRASIL, ITAPETININGA - SP, 18214-500",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-11",
    "school": "EE CORINA CAÇAPAVA BARTH-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "VILA JUDITH",
    "address": "RUA DR. COUTINHO, 1370 - VILA JUDITH, ITAPETININGA - SP, 18200-358",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-12",
    "school": "EE DESEMBARGADOR BERNARDES JUNIOR",
    "city": "ITAPETININGA",
    "bairro": "VILA ARRUDA",
    "address": "RUA ITAPETININGA, 51 - VILA ARRUDA, ITAPETININGA - SP, 18212-198",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-13",
    "school": "EE ERNESTA XAVIER RABELLO ORSI-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "JARDIM ITÁLIA",
    "address": "RUA JUVENAL ROLIM CYRINEU, 42 - JARDIM ITÁLIA, ITAPETININGA - SP, 18201-600",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-14",
    "school": "EE ERNESTINA LOUREIRO MIRANDA-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "VILA BELO HORIZONTE",
    "address": "RUA SANTINO LEME DE ALMEIDA, S/N - VILA BELO HORIZONTE, ITAPETININGA - SP, 18211-180",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-15",
    "school": "EE EURINY DE SOUZA VIEIRA-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "CHAPADINHA",
    "address": "ESTRADA MUNICIPAL JOSÉ CORRÊA DE MORAES, 225 - CHAPADINHA, ITAPETININGA - SP, 18206-800",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-16",
    "school": "EE MARIA DE LOURDES BARREIROS CARVALHO-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "ESTÂNCIA 4 IRMAOS",
    "address": "AVENIDA WENCESLAU BRÁZ, 2005 - ESTÂNCIA 4 IRMAOS, ITAPETININGA - SP, 18213-170",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-17",
    "school": "EE PÉRICLES GALVÃO-PROF.",
    "city": "ITAPETININGA",
    "bairro": "CHAPADA GRANDE",
    "address": "ESTRADA MUNICIPAL JOSÉ CORRÊA DE MORAES, S/N - CHAPADA GRANDE, ITAPETININGA - SP, 18215-410",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-18",
    "school": "SALÃO IGREJA CATÓLICA-  BAIRRO DOS PALANQUES",
    "city": "ITAPETININGA",
    "bairro": "BAIRRO DOS PALANQUES",
    "address": "BAIRRO DOS PALANQUES - BAIRRO DOS PALANQUES, ITAPETININGA - SP, 18219-899",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-19",
    "school": "EMEF BENEDITA VIEIRA DE ALMEIDA MADALENA-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "JARDIM FLORESTAL",
    "address": "RUA OSVALDO CRUZ, 1992 - JARDIM FLORESTAL, ITAPETININGA - SP, 18202-000",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-20",
    "school": "EMEF HILDA WEISS TRENCH-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "VILA BELO HORIZONTE",
    "address": "RUA LUCAS NOGUEIRA GARCEZ, 500 - VILA BELO HORIZONTE, ITAPETININGA - SP, 18211-240",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-21",
    "school": "EMEF JOSÉ SALEM NETO-PROF.",
    "city": "ITAPETININGA",
    "bairro": "VILA ARRUDA",
    "address": "RUA ITAPETININGA, 341 - VILA ARRUDA, ITAPETININGA - SP, 18212-198",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-22",
    "school": "EMEIF ADRIANA PORTO ROCHA-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "DISTRITO DO MORRO DO ALTO",
    "address": "RUA JOÃO AYRES DA ROCHA, 120 - DISTRITO DO MORRO DO ALTO, ITAPETININGA - SP, 18219-204",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-23",
    "school": "EMEIF LOIDE LARA-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "VILA RECREIO",
    "address": "AV. DR. CYRO ALBUQUERQUE, 3680 - VILA RECREIO, ITAPETININGA - SP, 18201-440",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-24",
    "school": "EMEF JOSÉ PIRES DE CAMPOS",
    "city": "ITAPETININGA",
    "bairro": "DO RIO ACIMA",
    "address": "ESTR DO RIO ACIMA - SN - SITIO CORREGO DOS BARROS - DO RIO ACIMA, ITAPETININGA - SP, 18219-899",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-25",
    "school": "EMEF PROF. EVANILDE SHIRLEY DE OLIVEIRA MAJEWSKI",
    "city": "ITAPETININGA",
    "bairro": "VILA PRADO",
    "address": "RUA EVILASIO MASSAINE PIRES 1530 - VILA PRADO, ITAPETININGA - SP, 18214-220",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-26",
    "school": "EMEF MARIA CECÍLIA ROLIM NALESSO-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "JARDIM FOGAÇA",
    "address": "RUA ALICE DE CAMARGO ROSA, 100 - JARDIM FOGAÇA, ITAPETININGA - SP, 18202-390",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-27",
    "school": "EE FLORA PRESTES CÉSAR-PROFª",
    "city": "SARAPUÍ",
    "bairro": "CENTRO",
    "address": "RUA NOSSA SENHORA DAS DORES, 390 - CENTRO, SARAPUÍ - SP, 18225-023",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-28",
    "school": "EE MARIA IMACULADA CERQUEIRA BORHER-PROF.ª",
    "city": "SARAPUÍ",
    "bairro": "SÃO JOÃO",
    "address": "RUA GABRIEL TADEU ANTUNES DE MEDEIROS,  67 - SÃO JOÃO, SARAPUÍ - SP, 18225-245",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-29",
    "school": "EMEF CONCEIÇÃO APARECIDA  HOLTZ SANTOS-PROF.ª",
    "city": "SARAPUÍ",
    "bairro": "VILA ANA MARIA",
    "address": "RUA DR. JÚLIO PRESTES, 780 - VILA ANA MARIA, SARAPUÍ - SP, 18225-005",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-30",
    "school": "EMEF HONORINA HOLTZ DO AMARAL-PROF.ª",
    "city": "SARAPUÍ",
    "bairro": "DISTRITO DO COCAES",
    "address": "RUA OLEGÁRIO CORRÊA DA SILVA,  285 - DISTRITO DO COCAES, SARAPUÍ - SP, 18229-022",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-31",
    "school": "EMEIF CELINA TERESA HOLTZ LEME-PROF.ª",
    "city": "SARAPUÍ",
    "bairro": "CENTRO",
    "address": "RUA ANTONIO BENEDITO DE ALMEIDA, 126 - CENTRO, SARAPUÍ - SP, 18225-045",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-32",
    "school": "E.E. JOSÉ BALTAZAR DE SOUZA",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "GRAMADAO",
    "address": "RUA JOSÉ  ANTONIO VIEIRA, 300 - GRAMADAO, SÃO MIGUEL ARCANJO - SP, 18230-971",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "142596-0",
      "name": "LEANDRO CAVALCANTE COSTA",
      "rank": "Sd PM",
      "phone": "(15) 981789478"
    },
    "pm": {
      "re": "108692-8",
      "name": "ROQUE ROBERTO DE OLIVEIRA",
      "rank": "Cb PM",
      "phone": "(15) 997517172"
    }
  },
  {
    "id": "school-33",
    "school": "E.E. MASSANORI KARAZAWA",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "COLONIA PINHAL",
    "address": "ESTRADA KUNEHEI ARIGA, S/N - COLONIA PINHAL, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "160679-4",
      "name": "LUIZ RICARDO PALMA SEVERINO",
      "rank": "CB PM",
      "phone": "(15) 996783408"
    },
    "pm": {
      "re": "181670-5",
      "name": "MARCELO GIOVANNI DAMIAO DO AMARAL",
      "rank": "Sd PM",
      "phone": "(15) 998402312"
    }
  },
  {
    "id": "school-34",
    "school": "E.E. NESTOR FOGAÇA",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "CENTRO",
    "address": "RUA RUI BARBOSA., 322 - CENTRO, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "129255-2",
      "name": "NELSON NUNES VIEIRA JUNIOR",
      "rank": "1º Sgt PM",
      "phone": "(15) 997853231"
    },
    "pm": {
      "re": "192215-7",
      "name": "ROBERTA CAROLINA RODRIGUES DE OLIVEIRA",
      "rank": "Sd PM",
      "phone": "(15) 981083660"
    }
  },
  {
    "id": "school-35",
    "school": "E.E. PROFª MARIA ELISA DE OLIVEIRA",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "CENTRO",
    "address": "RUA CORONEL FERNANDO PRESTES., 460 - CENTRO, SÃO MIGUEL ARCANJO - SP, 18230-051",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "162969-7",
      "name": "YRIS FERNANDA CONCEIÇAO FERREIRA",
      "rank": "Sd PM",
      "phone": "(15) 998336766"
    },
    "pm": {
      "re": "145074-3",
      "name": "JOSIELE SIMONE DE LIMA",
      "rank": "Cb PM",
      "phone": "(15) 981812848"
    }
  },
  {
    "id": "school-36",
    "school": "E.E. PROFª MARIA FRANCISCA DEOCLECIO ARRIVABENE",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "COHAB 1 - JARDIM BOM JESUS",
    "address": "RUA CAMILO MOYSÉS., 150 - COHAB 1 - JARDIM BOM JESUS, SÃO MIGUEL ARCANJO - SP, 18232-002",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "131741-5",
      "name": "VANDERSON DE ALCANTARA",
      "rank": "Cb PM",
      "phone": "(15) 996807216"
    },
    "pm": {
      "re": "162270-6",
      "name": "ALEXANDRA BEATRIZ OLIVEIRA ALMEIDA MAROTTA",
      "rank": "Cb PM",
      "phone": "(15) 996637730"
    }
  },
  {
    "id": "school-37",
    "school": "E.E. SADAMITA IWASSAKI",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "ABAITINGA",
    "address": "RUA GENTIL CAMARGO, 283 - ABAITINGA, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "141997-8",
      "name": "EDSON RODRIGUES",
      "rank": "Cb PM",
      "phone": "(15) 997892419"
    },
    "pm": {
      "re": "162203-0",
      "name": "DIOGO DO NASCIMENTO",
      "rank": "Sd PM",
      "phone": "(15) 997917742"
    }
  },
  {
    "id": "school-38",
    "school": "E.M.E.F. JOSÉ GOMIDE DE CASTRO",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "CENTRO",
    "address": "RUA DR. FERNANDO COSTA., 907 - CENTRO, SÃO MIGUEL ARCANJO - SP, 18230-049",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "123188-0",
      "name": "OLIMPIO TEOFILO DO ESPIRITO SANTO NETTO",
      "rank": "1º Sgt PM",
      "phone": "(15) 997197759"
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-39",
    "school": "E.M.E.F. PROF. ARCYPRESTE RUGGERI",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "CENTRO",
    "address": "RUA RUI BARBOSA., 305 - CENTRO, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "111090-0",
      "name": "IRINEU SOARES RODRIGUES",
      "rank": "Cb PM",
      "phone": "(15) 32793724"
    },
    "pm": {
      "re": "149334-5",
      "name": "THAIS CAMARGO",
      "rank": "Cb PM",
      "phone": "(15) 996605511"
    }
  },
  {
    "id": "school-40",
    "school": "E.M.E.I. PROF. PAULO ROBERTO ORTIZ DE CAMARGO",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "VILA APARECIDA",
    "address": "RUA JOÃO BORGES DA SILVA., 150 - VILA APARECIDA, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "171941-6",
      "name": "JULIANA BARBARA AGOSTINHO DE CARVALHO",
      "rank": "Cb PM",
      "phone": "(15) 997257520"
    },
    "pm": {
      "re": "991870-1",
      "name": "ANTONIO DO NASCIMENTO RIBEIRO",
      "rank": "Cb PM",
      "phone": "(15) 997999741"
    }
  },
  {
    "id": "school-41",
    "school": "E.M.E.I.F.  PROFª CARMELITA VIEIRA TERRA DIAS",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "GUARAREMA",
    "address": "RUA JOÃO BATHISTA TEOBALDO, 180 - GUARAREMA, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "142590-A",
      "name": "CARLOS ALBERTO DE QUEIROZ",
      "rank": "Cb PM",
      "phone": "(15) 998253577"
    },
    "pm": {
      "re": "141612-0",
      "name": "GERSON QUIRINO DEMETRIO VIEIRA",
      "rank": "Cb PM",
      "phone": "(15) 998221120"
    }
  },
  {
    "id": "school-42",
    "school": "E.M.E.I.F. ANGELINA MIGUEL ARUK",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "BREJAUVA",
    "address": "RODOVIA JOÃO SANTIAGO TERRA FRANÇA, K.M. 30 - BREJAUVA, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "111114-A",
      "name": "PAULO CESAR MOMBERG DE BARROS",
      "rank": "Cb PM",
      "phone": "(15) 997489085"
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-43",
    "school": "E.M.E.I.F. FERMINO MENDES DA SILVA",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "POCINHO",
    "address": "RUA CÔNEGO FRANCISCO RIBEIRO, 350 - POCINHO, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "152972-2",
      "name": "ADRIANO DE SOUZA",
      "rank": "Sd PM",
      "phone": "(19) 999842089"
    },
    "pm": {
      "re": "181609-8",
      "name": "BRUNO PEREIRA DA SILVA",
      "rank": "Cb PM",
      "phone": "(15) 998473745"
    }
  },
  {
    "id": "school-44",
    "school": "E.M.E.I.F. FROFª MARIA INÊS MARQUES MENDES",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "TURVINHO",
    "address": "BAIRRO TURVINHO. - TURVINHO, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "157619-4",
      "name": "GIOVANE DA CRUZ QUEIROZ",
      "rank": "Sd PM",
      "phone": "(11) 996809090"
    },
    "pm": {
      "re": "147763-3",
      "name": "LEONARDO RIBEIRO CIPRIANO",
      "rank": "Cb PM",
      "phone": "(15) 998473208"
    }
  },
  {
    "id": "school-45",
    "school": "E.M.E.I.F. JOAQUIM NUNES VIEIRA",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "RETIRO",
    "address": "ESTRADA DO RETIRO - RETIRO, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "111871-4",
      "name": "ANDERSON DE SOUZA DINIZ",
      "rank": "Cb PM",
      "phone": "(15) 997662956"
    },
    "pm": {
      "re": "120641-9",
      "name": "FERNANDO HENRIQUE DOS SANTOS",
      "rank": "Cb PM",
      "phone": "(15) 992011440"
    }
  },
  {
    "id": "school-46",
    "school": "E.M.E.I.F. PROF. ARANI JOSÉ DA SILVA",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "JARDIM PICA-PAU",
    "address": "AV. DOS VITICULTORES., 665 - JARDIM PICA-PAU, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "146554-6",
      "name": "THIAGO JAKSON WALDOW SOTA",
      "rank": "Cb PM",
      "phone": "(15) 996145704"
    },
    "pm": {
      "re": "162599-3",
      "name": "SILAS GABRIEL FERREIRA",
      "rank": "Sd PM",
      "phone": "(15) 997980502"
    }
  },
  {
    "id": "school-47",
    "school": "E.M.E.I.F. PROFª THEREZA MARIA CUNHA BODO DE CARVALHO",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "FAXINAL DOS ALMEIDAS",
    "address": "BAIRRO FAXINAL DOS ALMEIDAS. - FAXINAL DOS ALMEIDAS, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "145469-2",
      "name": "ANDRE HENRIQUE LOPES DA COSTA",
      "rank": "Cb PM",
      "phone": "(15) 996052825"
    },
    "pm": {
      "re": "120696-6",
      "name": "THIAGO AUGUSTO CAMPOS RAMOS CORREA",
      "rank": "Cb PM",
      "phone": "(15) 991823355"
    }
  },
  {
    "id": "school-48",
    "school": "E.M.E.I.F. VEREADOR JOÃO GATO",
    "city": "SÃO MIGUEL ARCANJO",
    "bairro": "SANTA CRUZ",
    "address": "RUA EUCLIDES DE ALMEIDA BUENO, 730 - SANTA CRUZ, SÃO MIGUEL ARCANJO - SP, 18230-000",
    "zone": "318",
    "opm": "CPI-7 - 22.BPM/I - 1.CIA",
    "am": {
      "re": "991815-9",
      "name": "CRISTIANO EDUARDO POLES",
      "rank": "Cb PM",
      "phone": "(15) 997581366"
    },
    "pm": {
      "re": "127137-7",
      "name": "VANCLEI BENEDITO FOGACA",
      "rank": "Cb PM",
      "phone": "(15) 96086088"
    }
  },
  {
    "id": "school-49",
    "school": "EE CEL PEDRO DIAS DE CAMPOS",
    "city": "CAPELA DO ALTO",
    "bairro": "CENTRO",
    "address": "RUA JOÃO FELIPE, 200 - CENTRO, CAPELA DO ALTO - SP, 18195-067",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-50",
    "school": "EE MARCÍLIO LEITE DE ALMEIDA",
    "city": "CAPELA DO ALTO",
    "bairro": "CENTRO",
    "address": "RUA MARIA AMÉLIA DE ALMEIDA, N. 20 - CENTRO, CAPELA DO ALTO - SP, 18195-071",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-51",
    "school": "EMEF BAIRRO DO RICARDO PUCCETTI",
    "city": "CAPELA DO ALTO",
    "bairro": "DO IPEROZINHO",
    "address": "ESTRADA BRÁS JOÃO VIEIRA S/N - DO IPEROZINHO, CAPELA DO ALTO - SP, 18195-701",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-52",
    "school": "EMEF PROFª MARIA ELZA LÁZARA LOPES",
    "city": "CAPELA DO ALTO",
    "bairro": "CENTRO",
    "address": "AVENIDA PROFESSOR CASTORINO DE ALMEIDA, 300 - CENTRO, CAPELA DO ALTO - SP, 18195-031",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-53",
    "school": "EMEF VEREADOR  FRANCISCO MUNHOZ SANCHES",
    "city": "CAPELA DO ALTO",
    "bairro": "DISTRITO DO PORTO",
    "address": "AV BOM JESUS - DISTRITO DO PORTO, CAPELA DO ALTO - SP, 18199-004",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-54",
    "school": "EMEI FRANCISCO MARIANO DE ALMEIDA",
    "city": "CAPELA DO ALTO",
    "bairro": "JARDIM NOVA CAPELA",
    "address": "RUA NESTRINA MARIA MACHADO - JARDIM NOVA CAPELA, CAPELA DO ALTO - SP, 19197-056",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-55",
    "school": "E E VEREADOR JOSE LOPES",
    "city": "QUADRA",
    "bairro": "CENTRO",
    "address": "RUA CORNELIO VIEIRA DE CAMARGO 510 - CENTRO, QUADRA - SP, 18255-025",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-56",
    "school": "EMEF JOAO  IGNÁCIO SOARES",
    "city": "QUADRA",
    "bairro": "CENTRO",
    "address": "RUA DR RENATO MOTA 36 - CENTRO, QUADRA - SP, 18255-007",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-57",
    "school": "CEPEM PROFª BENEDICTA PEREIRA FIUZA ORSI",
    "city": "TATUÍ",
    "bairro": "CENTRO",
    "address": "PRAÇA DA BANDEIRA, 15 - CENTRO, TATUÍ - SP, 18270-390",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-58",
    "school": "CEPEM PROFESSORA CACILDA SÁ DE OLIVEIRA",
    "city": "TATUÍ",
    "bairro": "BAIRRO DOS MIRANDAS",
    "address": "BAIRRO DOS MIRANDAS - BAIRRO DOS MIRANDAS, TATUÍ - SP, 18270-899",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-59",
    "school": "EMEI DO CONGONHAL",
    "city": "TATUÍ",
    "bairro": "BAIRRO CONGONHAL",
    "address": "ESTRADA MUNICIPAL DO CONGONHAL 2015 - BAIRRO CONGONHAL, TATUÍ - SP, 18270-899",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-60",
    "school": "COMPLEXO ED. PROFª MARIA APARECIDA CAMARGO VOSS",
    "city": "TATUÍ",
    "bairro": "JARDIM LIRIO",
    "address": "RUA SERAFIM RODRIGUES FERREIRA, S/N. - JARDIM LIRIO, TATUÍ - SP, 18272-380",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-61",
    "school": "EE BARÃO DE SURUÍ",
    "city": "TATUÍ",
    "bairro": "CENTRO",
    "address": "PRAÇA PAULO SETUBAL 101 - CENTRO, TATUÍ - SP, 18270-520",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-62",
    "school": "EE CHICO PEREIRA",
    "city": "TATUÍ",
    "bairro": "CENTRO",
    "address": "RUA SANTO ANTONIO 249 - CENTRO, TATUÍ - SP, 18275-010",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-63",
    "school": "EE PROF ARY DE ALMEIDA SINISGALLI",
    "city": "TATUÍ",
    "bairro": "VILA ESPERANCA",
    "address": "RUA CECÍLIO BONEDER 428 - VILA ESPERANCA, TATUÍ - SP, 18278-003",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-64",
    "school": "EE PROF DEÓCLES VIEIRA DE CAMARGO",
    "city": "TATUÍ",
    "bairro": "CENTRO",
    "address": "RUA SETE DE MAIO 828 - CENTRO, TATUÍ - SP, 18275-050",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-65",
    "school": "EE PROF FERNANDO GUEDES DE MORAES",
    "city": "TATUÍ",
    "bairro": "JARDIM LUCILA",
    "address": "RUA DR ANTONIO JARBAS VEIGA DE BARROS 205 - JARDIM LUCILA, TATUÍ - SP, 18277-012",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-66",
    "school": "EE PROF JOSE CELSO DE MELLO",
    "city": "TATUÍ",
    "bairro": "CDHU",
    "address": "RUA ALBERTO QUINTO LABRONICI, 62 - CDHU, TATUÍ - SP, 18277-390",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-67",
    "school": "EE PROFª ALTINA MAYNARDES ARAUJO",
    "city": "TATUÍ",
    "bairro": "BOQUEIRAO",
    "address": "RUA TEÓFILO ANDRADE GAMA 800 - BOQUEIRAO, TATUÍ - SP, 18270-360",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-68",
    "school": "EE PROFª LIGIA VIEIRA DE CAMARGO DEL FIOL",
    "city": "TATUÍ",
    "bairro": "VILA ANGELICA",
    "address": "RUA JOSÉ TAVARES 415 - VILA ANGELICA, TATUÍ - SP, 18280-190",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-69",
    "school": "EE PROFª SEMÍRAMIS TURELLI AZEVEDO",
    "city": "TATUÍ",
    "bairro": "JARDIM TOKIO",
    "address": "RUA GLADYS BERNARDES MINHOTO 411 - JARDIM TOKIO, TATUÍ - SP, 18279-580",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-70",
    "school": "EE PROFESSORA  LIENETTE AVALONE RIBEIRO",
    "city": "TATUÍ",
    "bairro": "VILA DOUTOR LAURINDO",
    "address": "RUA PROF LICÍNIO ALVES DA CRUZ 140 - VILA DOUTOR LAURINDO, TATUÍ - SP, 18271-750",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-71",
    "school": "EMEF BAIRRO DOS OLIVEIRAS",
    "city": "TATUÍ",
    "bairro": "BAIRRO DOS OLIVEIRAS",
    "address": "BAIRRO DOS OLIVEIRAS - BAIRRO DOS OLIVEIRAS, TATUÍ - SP, 18270-001",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-72",
    "school": "EMEF DO  BAIRRO DA AMERICANA",
    "city": "TATUÍ",
    "bairro": "BAIRRO DA AMERICANA",
    "address": "RUA JOAQUIM LOURENÇO, 50 - BAIRRO DA AMERICANA, TATUÍ - SP, 18272-131",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-73",
    "school": "EMEF EUGÊNIO SANTOS",
    "city": "TATUÍ",
    "bairro": "CENTRO",
    "address": "PRAÇA ADELAIDE GUEDES - CENTRO, TATUÍ - SP, 18270-020",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-74",
    "school": "EMEF JOÃO FLORÊNCIO",
    "city": "TATUÍ",
    "bairro": "CENTRO",
    "address": "PRAÇA PAULO SETUBAL 21 - CENTRO, TATUÍ - SP, 18270-380",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-75",
    "school": "EMEF PROF ACCÁCIO VIEIRA DE CAMARGO",
    "city": "TATUÍ",
    "bairro": "VILA SAO CRISTOVAO",
    "address": "PRAÇA DEOCACIR DE OLIVEIRA E SILVA 170 - VILA SAO CRISTOVAO, TATUÍ - SP, 18280-018",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-76",
    "school": "EMEF PROFESSOR JOSÉ TOMAS BORGES",
    "city": "TATUÍ",
    "bairro": "JARDIM SANTA CRUZ",
    "address": "RUA CORONEL GUILHERME, 210 - JARDIM SANTA CRUZ, TATUÍ - SP, 18275-108",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-77",
    "school": "EMEF PROFESSORA MAGALY AZAMBUJA DE TOLEDO",
    "city": "TATUÍ",
    "bairro": "JARDIM SANTA RITA DE CASSIA",
    "address": "RUA OSMIL MARTINS, 400 - JARDIM SANTA RITA DE CASSIA, TATUÍ - SP, 18274-200",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-78",
    "school": "EMEF PROFESSORA MARIA CONCEIÇÃO OLIVEIRA MARCONDES",
    "city": "TATUÍ",
    "bairro": "VALINHOS",
    "address": "RUA CONSTRUTOR JUSTO DEL SANTORO, 300 - VALINHOS, TATUÍ - SP, 18276-550",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-79",
    "school": "EMEF PROFESSORA MARIA ELI DA SILVA CAMARGO",
    "city": "TATUÍ",
    "bairro": "JARDIM ROSA GARCIA",
    "address": "RUA PROFESSORA MARIA DO CARMO HOLTZ,80 - JARDIM ROSA GARCIA, TATUÍ - SP, 18275-580",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-80",
    "school": "EMEF PROFESSORA TERESINHA VIEIRA DE CAMARGO BARROS",
    "city": "TATUÍ",
    "bairro": "JARDIM MANOEL DE ABREU",
    "address": "RUA JOSÉ BASTOS 126 - JARDIM MANOEL DE ABREU, TATUÍ - SP, 18273-045",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-81",
    "school": "EMEFJOSÉ GALVÃO SOBRINHO",
    "city": "TATUÍ",
    "bairro": "JARDIM TOKIO",
    "address": "RUA MARIETA DE ASSUNÇÃO TELES, 150 - JARDIM TOKIO, TATUÍ - SP, 18279-610",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-82",
    "school": "EMEI PROFª MARIA CRISTINA FERRÃO VIEIRA MARTINS",
    "city": "TATUÍ",
    "bairro": "JARDIM GONZAGA",
    "address": "RUA JULIO RODRIGUES DA COSTA, 80 - JARDIM GONZAGA, TATUÍ - SP, 18280-360",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-83",
    "school": "ETEC SALLES GOMES",
    "city": "TATUÍ",
    "bairro": "CENTRO",
    "address": "PRAÇA ADELAIDE GUEDES 01 - CENTRO, TATUÍ - SP, 18270-020",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-84",
    "school": "EMEF. PROFESSOR PAULINHO RIBEIRO",
    "city": "TATUÍ",
    "bairro": "BAIRRO TANQUINHO",
    "address": "RUA JOAO MARIO LOURENCO 205 - BAIRRO TANQUINHO, TATUÍ - SP, 18274-833",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-85",
    "school": "EMEI EDUARDO STRUFALDI",
    "city": "TATUÍ",
    "bairro": "JARDIM MODENA",
    "address": "RUA SANTA CRUZ 1647 - JARDIM MODENA, TATUÍ - SP, 18266-020",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-86",
    "school": "NEBAM",
    "city": "TATUÍ",
    "bairro": "CENTRO",
    "address": "RUA PROFESSOR ORACY GOMES, 551 - CENTRO, TATUÍ - SP, 18270-600",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 2.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-87",
    "school": "E.E.DR. FORTUNATO DE CAMARGO",
    "city": "ANGATUBA",
    "bairro": "CENTRO",
    "address": "RUA IRMÃOS BASILE, 527 - CENTRO, ANGATUBA - SP, 18240-067",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-88",
    "school": "E.E.IVENS VIEIRA",
    "city": "ANGATUBA",
    "bairro": "CENTRO",
    "address": "RUA MAJOR PEREIRA DE MORAIS, 1228 - CENTRO, ANGATUBA - SP, 18240-043",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-89",
    "school": "E.E.PROFESSOR ORESTES ORIS DE ALBUQUERQUE",
    "city": "ANGATUBA",
    "bairro": "RESIDENCIAL INGA",
    "address": "RUA JONAS VILKAS, 47 - RESIDENCIAL INGA, ANGATUBA - SP, 18241-251",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-90",
    "school": "E.M.E.F. PROFESSORA MARIA  ISABEL LOPES DE OLIVEIRA",
    "city": "ANGATUBA",
    "bairro": "CENTRO",
    "address": "R. AURÉLIO MOURA, N. 180 - CENTRO, ANGATUBA - SP, 18240-049",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-91",
    "school": "E.M.E.I.F. MARIA SALETE BASILE SALES",
    "city": "ANGATUBA",
    "bairro": "VILA VOLPI",
    "address": "RUA DAS ORQUÍDEAS, N. 484 - VILA VOLPI, ANGATUBA - SP, 18242-536",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-92",
    "school": "E.M.E.I.F. PROFESSOR AFONSO BASILE",
    "city": "ANGATUBA",
    "bairro": "BOM RETIRO",
    "address": "R. GABRIEL FERREIRA VAZ, N. 640 - BOM RETIRO, ANGATUBA - SP, 28244-004",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-93",
    "school": "E.M.E.I.F. PROFESSORA HERMÍNIA ARAÚJO",
    "city": "ANGATUBA",
    "bairro": "GUAREI VELHO",
    "address": "ENTRADA RAPOSO TAVARES, KM 215 C.C. ESTRADA MUNICIPAL, SN -  GUAREI VELHO, ANGATUBA - SP, 18243-899",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-94",
    "school": "E.M.E.I.F. PROFESSORA MARIA INÊZ DOS SANTOS",
    "city": "ANGATUBA",
    "bairro": "VILA RIBEIRO",
    "address": "R. PROFESSORA ANTONINA FERNANDES MOURA, 551 - VILA RIBEIRO, ANGATUBA - SP, 18242-110",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-95",
    "school": "E.E. RENATO ROCHA MIRANDA",
    "city": "CAMPINA DO MONTE ALEGRE",
    "bairro": "CENTRO",
    "address": "R PRUDENTE ALVES, 236 - CENTRO, CAMPINA DO MONTE ALEGRE - SP, 18245-065",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-96",
    "school": "E.M.E.F. PROFESSOR ENIL BORIS DE MORAIS FERREIRA",
    "city": "CAMPINA DO MONTE ALEGRE",
    "bairro": "VILA GOMES",
    "address": "AVENIDA DA CONSOLAÇÃO, 243 - VILA GOMES, CAMPINA DO MONTE ALEGRE - SP, 18245-031",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-97",
    "school": "E.M.E.F. PROFESSORA ALZIRA DE OLIVEIRA GARCIA",
    "city": "CAMPINA DO MONTE ALEGRE",
    "bairro": "CENTRO",
    "address": "R. FRANCISCO PISTILA, 86 - CENTRO, CAMPINA DO MONTE ALEGRE - SP, 18245-069",
    "zone": "215",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-98",
    "school": "EE CEL CASTANHO DE ALMEIDA",
    "city": "GUAREÍ",
    "bairro": "CENTRO",
    "address": "RUA CEL ANDRADE, 152 - CENTRO, GUAREÍ - SP, 18250-007",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-99",
    "school": "EE PROF EZEQUIEL CASTANHO",
    "city": "GUAREÍ",
    "bairro": "CENTRO",
    "address": "PRAÇA CORONEL ANIBAL CASTANHO, 288 - CENTRO, GUAREÍ - SP, 18250-043",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-100",
    "school": "EMEF PROF JOAO ALCINDO VIEIRA",
    "city": "GUAREÍ",
    "bairro": "CENTRO",
    "address": "RUA TIRADENTES, 100 - CENTRO, GUAREÍ - SP, 18250-055",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-101",
    "school": "EMEI  MARIA DE MORAIS BARROS - MARICA NEVES",
    "city": "GUAREÍ",
    "bairro": "DA VITORIA",
    "address": "RUA ROQUE JACOB DE BARROS, KM 06 - DA VITORIA, GUAREÍ - SP, 18254-899",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-102",
    "school": "EMEI PROFª VANIA REGINA VIEIRA DE PROENCA",
    "city": "GUAREÍ",
    "bairro": "CENTRO",
    "address": "RUA CAP ANTONIO ABIO DA ROCHA - CENTRO, GUAREÍ - SP, 18250-083",
    "zone": "140",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-103",
    "school": "EMEF JULIETA ROLIM DA SILVA - PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "DISTRITO DO RECHAN",
    "address": "RUA JUSTINO MACHADO MEIRA, 151 - DISTRITO DO RECHAN, ITAPETININGA - SP, 18213-415",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-104",
    "school": "EMEF MARIA APARECIDA SILVA BRISOLLA FRANCI - PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "CHAPADINHA",
    "address": "ESTRADA MUNICIPAL JOSÉ CORRÊA DE MORAES, 266 - CHAPADINHA, ITAPETININGA - SP, 18206-800",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-105",
    "school": "EMEF MARIA GOMES DOS SANTOS-SR.ª",
    "city": "ITAPETININGA",
    "bairro": "BAIRRO DA CONCEIÇÃO",
    "address": "RUA SÃO BENTO, 222 - BAIRRO DA CONCEIÇÃO, ITAPETININGA - SP, 18200-190",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-106",
    "school": "EMEF PROFª SELMA NELI PRANCHES DE OLIVEIRA",
    "city": "ITAPETININGA",
    "bairro": "JARDIM BELA VISTA",
    "address": "AV. DR. JOSÉ LEMBO,651 - JARDIM BELA VISTA, ITAPETININGA - SP, 18207-780",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-107",
    "school": "EMEF ROSA BADIN VIEIRA-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "JARDIM SHANGRILA",
    "address": "RUA HILDA MATARAZZO DELMANTO, 596 - JARDIM SHANGRILA, ITAPETININGA - SP, 18208-620",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-108",
    "school": "EMEF ZARIFE YARED-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "CENTRO",
    "address": "AV. FRANCISCO VÁLIO, 505 - CENTRO, ITAPETININGA - SP, 18200-008",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-109",
    "school": "EMEIF ANTONIA DEOCLÉCIA DE FREITAS - SR.ª",
    "city": "ITAPETININGA",
    "bairro": "GRAMADINHO",
    "address": "RUA LUIZ VAZ MOREIRA - SN - GRAMADINHO, ITAPETININGA - SP, 18218-000",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-110",
    "school": "EMEIF BAIRRO DO RETIRO",
    "city": "ITAPETININGA",
    "bairro": "BAIRRO DO RETIRO",
    "address": "ESTRADA VICINAL DA VARGINHA S/N - BAIRRO DO RETIRO, ITAPETININGA - SP, 18200-000",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-111",
    "school": "FATEC - FACULDADE DE TECNOLOGIA",
    "city": "ITAPETININGA",
    "bairro": "VILA BARTH",
    "address": "RUA DR. JOÃO VIEIRA DE CAMARGO, 104 - VILA BARTH, ITAPETININGA - SP, 18205-510",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-112",
    "school": "INSTITUTO IMACULADA CONCEIÇÃO",
    "city": "ITAPETININGA",
    "bairro": "CENTRO",
    "address": "RUA PEDRO MARQUES, 907 - CENTRO, ITAPETININGA - SP, 18200-005",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-113",
    "school": "POSTO AMBULATORIAL DE SAÚDE",
    "city": "ITAPETININGA",
    "bairro": "BAIRRO DO CAMPO GRANDE",
    "address": "RUA TAINHA S/N ASSENTAMENTO CARLOS LAMARCA - BAIRRO DO CAMPO GRANDE, ITAPETININGA - SP, 18200-000",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-114",
    "school": "EMEF NAZIRA YARED",
    "city": "ITAPETININGA",
    "bairro": "VILA MAZZEI",
    "address": "RUA CRISTOVAO COLOMBO 204 - VILA MAZZEI, ITAPETININGA - SP, 18210-210",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-115",
    "school": "EE ABÍLIO FONTES - PROF.",
    "city": "ITAPETININGA",
    "bairro": "VILA ROSA",
    "address": "RUA JOÃO BATISTA DE MACEDO MENDES, S/N - VILA ROSA, ITAPETININGA - SP, 18200-560",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-116",
    "school": "EE ADHERBAL DE PAULA FERREIRA",
    "city": "ITAPETININGA",
    "bairro": "CENTRO",
    "address": "AV. PEIXOTO GOMIDE, 126 - CENTRO, ITAPETININGA - SP, 18200-160",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-117",
    "school": "EE DARCY VIEIRA",
    "city": "ITAPETININGA",
    "bairro": "VILA BARTH",
    "address": "RUA FRANCISCO RODRIGUES JÚNIOR, 289 - VILA BARTH, ITAPETININGA - SP, 18205-550",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-118",
    "school": "EE ELISIÁRIO MARTINS DE MELLO-PROF.",
    "city": "ITAPETININGA",
    "bairro": "VILA REGINA",
    "address": "RUA ENG. CAIO DIAS BATISTA, 240 - VILA REGINA, ITAPETININGA - SP, 18207-350",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-119",
    "school": "EE EVÔNIO MARQUES-PROF.",
    "city": "ITAPETININGA",
    "bairro": "VARGINHA",
    "address": "RUA ONÓRIO SALES, S/N - VARGINHA, ITAPETININGA - SP, 18218-971",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-120",
    "school": "EE FERNANDO PRESTES-CEL.",
    "city": "ITAPETININGA",
    "bairro": "CENTRO",
    "address": "AV. PEIXOTO GOMIDE, 250 - CENTRO, ITAPETININGA - SP, 18200-160",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-121",
    "school": "EE JAIR BARTH-PROF.",
    "city": "ITAPETININGA",
    "bairro": "JARDIM BELA VISTA",
    "address": "RUA DR. JOSÉ SIDNEY DA CUNHA, S/N - JARDIM BELA VISTA, ITAPETININGA - SP, 18207-720",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-122",
    "school": "EE JOSÉ DA CONCEIÇÃO HOLTZ-PROF.",
    "city": "ITAPETININGA",
    "bairro": "DISTRITO DO GRAMADINHO",
    "address": "RUA FRANCISCO ALMEIDA MELO, 143 - DISTRITO DO GRAMADINHO, ITAPETININGA - SP, 18218-000",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-123",
    "school": "EE JUVENAL PAIVA PEREIRA-PROF.",
    "city": "ITAPETININGA",
    "bairro": "TUPY",
    "address": "RUA PEDRO LOPES DE ALMEIDA, 211 - TUPY, ITAPETININGA - SP, 18207-818",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-124",
    "school": "EE MAJOR FONSECA",
    "city": "ITAPETININGA",
    "bairro": "CENTRO",
    "address": "RUA VENÂNCIO AYRES, 108 - CENTRO, ITAPETININGA - SP, 18200-020",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-125",
    "school": "EE PEIXOTO GOMIDE",
    "city": "ITAPETININGA",
    "bairro": "CENTRO",
    "address": "AV. PEIXOTO GOMIDE, 198 - CENTRO, ITAPETININGA - SP, 18200-160",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-126",
    "school": "EE SEBASTIÃO PINTO-PROF.",
    "city": "ITAPETININGA",
    "bairro": "VILA SANTANA",
    "address": "RUA RUBENS  VIEIRA DA SILVA, S/N - VILA SANTANA, ITAPETININGA - SP, 18210-026",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-127",
    "school": "EE SEBASTIÃO VILLAÇA-PROF.",
    "city": "ITAPETININGA",
    "bairro": "VILA RIO BRANCO",
    "address": "AV.  PADRE ANTONIO BRUNETTI, 933 - VILA RIO BRANCO, ITAPETININGA - SP, 18208-000",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-128",
    "school": "EE VIRGÍLIO SILVEIRA-PROF.",
    "city": "ITAPETININGA",
    "bairro": "DISTRITO DO RECHAN",
    "address": "RUA JOÃO GALDINO DE CAMARGO, 203 - DISTRITO DO RECHAN, ITAPETININGA - SP, 18207-867",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-129",
    "school": "EMEF ADALBERTO CHRISTO DAS DORES-PROF.",
    "city": "ITAPETININGA",
    "bairro": "CENTRO",
    "address": "RUA ALFREDO MAIA, 571 - CENTRO, ITAPETININGA - SP, 18200-410",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-130",
    "school": "EMEF APPARECIDA MYRTHES DE MELLO MORAES",
    "city": "ITAPETININGA",
    "bairro": "VILA REIS",
    "address": "AV. PADRE CARLOS REGATIERI, 780 - VILA REIS, ITAPETININGA - SP, 18214-320",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 3.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-131",
    "school": "EMEF JANDYRA VIEIRA MARCONDES-PROF.ª",
    "city": "ITAPETININGA",
    "bairro": "CENTRO",
    "address": "RUA GENERAL CARNEIRO, 400 - CENTRO, ITAPETININGA - SP, 18200-035",
    "zone": "52",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-132",
    "school": "E E PRESIDENTE ARTHUR DA SILVA BERNARDES",
    "city": "CERQUILHO",
    "bairro": "CENTRO",
    "address": "AVENIDA PRESIDENTE WASHINGTON LUIZ, 478 - CENTRO, CERQUILHO - SP, 18520-039",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-133",
    "school": "E E PROFª VICTORIA MARCON BELLUCCI",
    "city": "CERQUILHO",
    "bairro": "JARDIM NOVA CERQUILHO",
    "address": "PRAÇA DOS COLIBRIS, 21 - JARDIM NOVA CERQUILHO, CERQUILHO - SP, 18527-032",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-134",
    "school": "E M E F LUIGI LUVIZOTTO",
    "city": "CERQUILHO",
    "bairro": "JARDIM SAO LUIZ",
    "address": "RUA CEARÁ, 50 - JARDIM SAO LUIZ, CERQUILHO - SP, 18520-334",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-135",
    "school": "E M E F LUIZA GAIOTTO CORRADI",
    "city": "CERQUILHO",
    "bairro": "CIDADE JARDIM",
    "address": "RUA BENEDITO ROSA DA SILVA, N 777 - CIDADE JARDIM, CERQUILHO - SP, 18528-002",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-136",
    "school": "E M E F PADRE JÚLIO HOLTZ",
    "city": "CERQUILHO",
    "bairro": "JARDIM NOVA CERQUILHO",
    "address": "RUA ITÁLIA, S/N - JARDIM NOVA CERQUILHO, CERQUILHO - SP, 18526-216",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-137",
    "school": "E M E F PROFª ADELAIDE TOZZI",
    "city": "CERQUILHO",
    "bairro": "RESIDENCIAL SEBASTIANI",
    "address": "RUA ROMANO SACCON, 77 - RESIDENCIAL SEBASTIANI, CERQUILHO - SP, 18528-312",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-138",
    "school": "E M E F PROFª LAVÍNIA RODRIGUES SANSON",
    "city": "CERQUILHO",
    "bairro": "VILA NOSSA SENHORA DE LOURDES",
    "address": "AVENIDA DR. VINÍCIO GAGLIARDI, 1114 - VILA NOSSA SENHORA DE LOURDES, CERQUILHO - SP, 18520-186",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-139",
    "school": "E M E F PROFª LÁZARA AUGUSTA CARDIA SABATINI",
    "city": "CERQUILHO",
    "bairro": "RESIDENCIAL ALIANCA",
    "address": "RUA JOAO PAGOTTO, 390 - RESIDENCIAL ALIANCA, CERQUILHO - SP, 18526-110",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-140",
    "school": "E M E F PROFª MARINA BORDENALI PILOTTO GAIOTTO",
    "city": "CERQUILHO",
    "bairro": "JARDIM NOVA CERQUILHO",
    "address": "RUA SÃO JOSÉ, 1275 - JARDIM NOVA CERQUILHO, CERQUILHO - SP, 18526-088",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-141",
    "school": "E M E F PROFª YOLANDA BIAGIONI CAMARGO",
    "city": "CERQUILHO",
    "bairro": "VILA SAO JOSE",
    "address": "RUA BAHIA, 205 - VILA SAO JOSE, CERQUILHO - SP, 18520-272",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-142",
    "school": "E M E F PROFº ARTUR LUIZ GAYOTTO",
    "city": "CERQUILHO",
    "bairro": "RESIDENCIAL DI NAPOLI I",
    "address": "RUA REPÚBLICA DO LÍBANO, 185 - RESIDENCIAL DI NAPOLI I, CERQUILHO - SP, 18526-198",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-143",
    "school": "E M E F PROFº JOÃO TOLEDO",
    "city": "CERQUILHO",
    "bairro": "CENTRO",
    "address": "RUA ACHILES AUDI, 268 - CENTRO, CERQUILHO - SP, 18520-029",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-144",
    "school": "E M E I I ONDINA MÓDOLO DORIGUELLO",
    "city": "CERQUILHO",
    "bairro": "JARDIM ITALIA",
    "address": "RUA ANTONIO JOSÉ BERTOLA, 25 - JARDIM ITALIA, CERQUILHO - SP, 18523-350",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-145",
    "school": "E M E I I PADRE ARTUR SILVEIRA",
    "city": "CERQUILHO",
    "bairro": "CENTRO",
    "address": "RUA VINTE E TRÊS DE MAIO, 29 - CENTRO, CERQUILHO - SP, 18520-160",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-146",
    "school": "E M E I JOSEPHINA MODANESI GRANDO",
    "city": "CERQUILHO",
    "bairro": "PARQUE DAS ARVORES",
    "address": "RUA FRANCISCO GRANDO, 195 - PARQUE DAS ARVORES, CERQUILHO - SP, 18523-196",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-147",
    "school": "E M E I MACHADO DE ASSIS",
    "city": "CERQUILHO",
    "bairro": "CECAP",
    "address": "RUA MINAS GERAIS, 749 - CECAP, CERQUILHO - SP, 18520-286",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-148",
    "school": "E M E I MONTEIRO LOBATO",
    "city": "CERQUILHO",
    "bairro": "CENTRO",
    "address": "RUA SABADIM, 4 - CENTRO, CERQUILHO - SP, 18520-119",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-149",
    "school": "E T E C PAULA SOUZA",
    "city": "CERQUILHO",
    "bairro": "JARDIM SAO FRANCISCO I",
    "address": "RUA VEREADOR MÁRIO PILON, S/N - JARDIM SAO FRANCISCO I, CERQUILHO - SP, 18527-042",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-150",
    "school": "SESI",
    "city": "CERQUILHO",
    "bairro": "SÃO FRANCISCO",
    "address": "RUA ANTONIO MODANEZ, 111 - SÃO FRANCISCO, CERQUILHO - SP, 18527-372",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-151",
    "school": "E E ARISTEU VASCONCELOS LEITE",
    "city": "CESÁRIO LANGE",
    "bairro": "CENTRO",
    "address": "RUA NOSSA SENHORA APARECIDA, 388 - CENTRO, CESÁRIO LANGE - SP, 18285-003",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-152",
    "school": "E M E F E I DEPUTADO ORLANDO IAZETTI",
    "city": "CESÁRIO LANGE",
    "bairro": "DISTRITO DA FAZENDA VELHA",
    "address": "AVENIDA JOAQUIM RODRIGUES DE PAULA, S/N - DISTRITO DA FAZENDA VELHA, CESÁRIO LANGE - SP, 18289-004",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-153",
    "school": "E M E F HONÓRIO ROQUE DE MIRANDA TORRES",
    "city": "CESÁRIO LANGE",
    "bairro": "VILA BRASIL",
    "address": "RUA ALAGOAS, 641 - VILA BRASIL, CESÁRIO LANGE - SP, 18287-054",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-154",
    "school": "E M E F NATAN PIRES DA SILVA",
    "city": "CESÁRIO LANGE",
    "bairro": "VILA NOVA",
    "address": "RUA URSULA SABLEVICIUS, 320 - VILA NOVA, CESÁRIO LANGE - SP, 18286-196",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-155",
    "school": "E M E F PROFª SÔNIA MARIA DE CAMPOS SPERANDIO",
    "city": "CESÁRIO LANGE",
    "bairro": "TORNINOS",
    "address": "RUA BENEDITO HONORATO, S/N - TORNINOS, CESÁRIO LANGE - SP, 18287-354",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-156",
    "school": "E M E F PROFº FRANCISCO MENDES DE ALMEIDA",
    "city": "CESÁRIO LANGE",
    "bairro": "CENTRO",
    "address": "RUA CAMARGO BARROS, 1.210 - CENTRO, CESÁRIO LANGE - SP, 18285-027",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-157",
    "school": "E M E B JOAQUIM CYRILLO DA SILVA",
    "city": "CESÁRIO LANGE",
    "bairro": "CENTRO",
    "address": "RUA NOVE DE JULHO 405 - CENTRO, CESÁRIO LANGE - SP, 18285-013",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-158",
    "school": "E M E B PROF. MARIA ANTONIA DE MIRANDA REIS",
    "city": "CESÁRIO LANGE",
    "bairro": "RESIDENCIAL DOM LAZARO",
    "address": "RUA SILVERIA PAULINA DE ALMEIDA S N - RESIDENCIAL DOM LAZARO, CESÁRIO LANGE - SP, 18285-092",
    "zone": "355",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-159",
    "school": "CENTRO EDUCACIONAL (SESI)",
    "city": "BOITUVA",
    "bairro": "BAIRRO PAU D'ALHO",
    "address": "RUA JOSÉ EDSON MACHADO DE OLIVEIRA, 105 - BAIRRO PAU D'ALHO, BOITUVA - SP, 18552-392",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-160",
    "school": "EE ALFERES MARIO PEDRO VERCELLINO",
    "city": "BOITUVA",
    "bairro": "VILA GINASIAL",
    "address": "AV. ALEXANDRINA BERTOLDI VERCELLINO, 361 - VILA GINASIAL, BOITUVA - SP, 18557-342",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-161",
    "school": "EMEF CORONEL JOSE CAMPOS DE ARRUDA BOTELHO",
    "city": "BOITUVA",
    "bairro": "CENTRO",
    "address": "RUA SÃO JOÃO, 126 - CENTRO, BOITUVA - SP, 18550-079",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-162",
    "school": "EMEF HÉLIO ZACHARIAS",
    "city": "BOITUVA",
    "bairro": "PARQUE RESIDENCIAL ESPLANADA",
    "address": "RUA WANDERLEI PEREIRA CAMARGO, 153 - PARQUE RESIDENCIAL ESPLANADA, BOITUVA - SP, 18550-000",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-163",
    "school": "EMEF PROFESSOR JOÃO PASTRE",
    "city": "BOITUVA",
    "bairro": "CIDADE JARDIM",
    "address": "AVENIDA CÉLIA LOURDES VERCELLINO, 965 - CIDADE JARDIM, BOITUVA - SP, 18556-105",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-164",
    "school": "EMEF PROFESSOR WANDERLEY ROSA DA SILVA",
    "city": "BOITUVA",
    "bairro": "JARDIM SAO PAULO",
    "address": "RUA ISALTINO GOMES DA SILVA, 201 - JARDIM SAO PAULO, BOITUVA - SP, 18557-200",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-165",
    "school": "EMEF PROFESSORA BRANCA SELAS AGOSTINHO",
    "city": "BOITUVA",
    "bairro": "JARDIM ANTONIO VESTENA MOSCHIONI",
    "address": "RUA JOSÉ REZENDE DE ALMEIDA, 50 - JARDIM ANTONIO VESTENA MOSCHIONI, BOITUVA - SP, 18550-440",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-166",
    "school": "EMEF PROFESSORA ELZA BRIGIDA FERRIELLO MALATRASI",
    "city": "BOITUVA",
    "bairro": "VILA GINASIAL",
    "address": "RUA DELFINO WALTER, 40 - VILA GINASIAL, BOITUVA - SP, 18557-340",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-167",
    "school": "EMEF PROFESSORA ESMERALDA BERTOLLI LABRONICI",
    "city": "BOITUVA",
    "bairro": "RESIDENCIAL PRIMO",
    "address": "AVENIDA BRASIL, 5 - RESIDENCIAL PRIMO, BOITUVA - SP, 18557-444",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-168",
    "school": "EMEI PROFESSORA CÉLIA LOURDES VERCELLINO",
    "city": "BOITUVA",
    "bairro": "CENTRO",
    "address": "TRAVESSA 13 DE MAIO, 21 - CENTRO, BOITUVA - SP, 18550-021",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-169",
    "school": "EMEIEF PROFESSORA MARIA JOSÉ VIANNA",
    "city": "BOITUVA",
    "bairro": "PARQUE NOSSA SENHORA DAS GRACAS",
    "address": "RUA SÃO MARCOS, 455 - PARQUE NOSSA SENHORA DAS GRACAS, BOITUVA - SP, 18550-634",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-170",
    "school": "EMEIF PROFESSOR OLAVO LÁZARO MUNHOZ SOARES",
    "city": "BOITUVA",
    "bairro": "RESIDENCIAL DE LORENZI",
    "address": "RUA JOÃO PAULO II, 381 - RESIDENCIAL DE LORENZI, BOITUVA - SP, 18550-314",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-171",
    "school": "EM ANTONIO MODOLO",
    "city": "BOITUVA",
    "bairro": "RECANTO MARAVILHA II",
    "address": "AV. SAO PAULO 401 - RECANTO MARAVILHA II, BOITUVA - SP, 18555-000",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-172",
    "school": "EMEIF PROFESSORA ENEY DE OLIVEIRA MORAES CAMPOS",
    "city": "BOITUVA",
    "bairro": "PARQUE RES.NOVO MUNDO",
    "address": "RUA ORLANDO MACIEL DE LIMA, 101 - PARQUE RES.NOVO MUNDO, BOITUVA - SP, 18558-018",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  },
  {
    "id": "school-173",
    "school": "ETEC \"VEREADOR VALDIVINO ANTONIO MARCUSSO\"",
    "city": "BOITUVA",
    "bairro": "CENTRO",
    "address": "RUA SÃO JOÃO, 69 PRAÇA DA MATRIZ - CENTRO, BOITUVA - SP, 18550-079",
    "zone": "369",
    "opm": "CPI-7 - 22.BPM/I - 4.CIA",
    "am": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    },
    "pm": {
      "re": "",
      "name": "",
      "rank": "Policial Militar",
      "phone": ""
    }
  }
];
