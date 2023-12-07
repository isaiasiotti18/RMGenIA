require('dotenv').config()

import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
})

async function main(entidades: string) {
  const task = `Eu preciso que você gere para mim um modelo relacional para um banco de dados que usa linguagem SQL baseado nas entidades que eu passar. Lembre de inserir: Chave primaria, tamanho de cada coluna, Tipo de cada coluna Chave estrangeira, etc...  Essas serão as entidades do meu banco de dados: ${entidades}`

  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: task }],
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    max_tokens: 2048,
  })

  return await response
}

main('Cliente, Produto, Fornecedor')
