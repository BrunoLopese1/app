import AverageTimeToResponse from "./Charts/AverageTimeToResponse"

export const cardItems3 = [
    {
      Icon:'fa-solid fa-clock',
      title:'Tempo médio para enviar a primeira resposta',
      subtitle:'Tempo médio que o atendente respondeu o contato de uma conversa nova.',
      count:AverageTimeToResponse,
    },
    {
      Icon:'fa-solid fa-clock',
      title:'Tempo médio para finalizar o atendimento',
      subtitle:'Tempo médio de duração de uma conversa até ser finalizada pelo atendente.',
      count:AverageTimeToResponse,
    },
    {
      Icon:'fa-solid fa-phone',
      title:'Conversas por DDD',
      subtitle:'Conversas em que houve interação do atendente, sejam novas ou em andamento.',
      count:AverageTimeToResponse,
    },
    {
      Icon:'fa-solid fa-phone',
      title:'Conversas por dia',
      subtitle:'Mostra o total de conversas abertas por dia.',
      count:AverageTimeToResponse,
    }
  ]