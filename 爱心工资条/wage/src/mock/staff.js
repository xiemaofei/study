import MockJs from 'mockjs'

const staffData = []

for (let i = 0; i < 200; i++) {
  staffData.push({
    id: i,
    name: MockJs.Random.cname(),
    phone: MockJs.mock(/\d{11}/),
    status: MockJs.Random.integer(0, 2),
    team: MockJs.Random.cword(5)
  })
}

export {
  staffData
}
