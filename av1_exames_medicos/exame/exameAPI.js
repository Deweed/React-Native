export async function findAll() {
  const URL = 'https://api-exame-dot-api-samples-423102.uc.r.appspot.com/api/exames'
  const requestInit = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer 12121968',
    }
  }

  const httpResponse = await fetch(URL, requestInit)

  if(httpResponse.ok) {
    console.log('Sucesso ao consultar os exames') 
    return await httpResponse.json()
  } else {
    const error = await httpResponse.text()
    console.log('Falha ao consultar os exames: ', httpResponse.status, error) 

    throw new Error('Deu ruim!')
  }
}

export async function deleteById(id) {
  const URL = 'https://api-exame-dot-api-samples-423102.uc.r.appspot.com/api/exames/' + id
  const requestInit = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer 12121968',
    }
  }

  const httpResponse = await fetch(URL, requestInit)

  if(httpResponse.ok) {
    console.log('Sucesso ao deletar o exame ' + id) 
    return await httpResponse.json()
  } else {
    const error = await httpResponse.text()
    console.log('Falha ao deletar o exame '+ id + ': ', httpResponse.status, error) 

    throw new Error('Deu ruim!')
  }
}
