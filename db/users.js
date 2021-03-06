const players = [
  { name: 'Steph Curry', number: 30, almamater: 'Davidson' },
  { name: 'Lebron James', number: 23, almamater: `St. Vincent's High School` },
  { name: 'Derrick Rose', number: 25, almamater: 'Kansas' },
  { name: 'Jimmy Butler', number: 23, almamater: 'Marquette' }
]

const countries = [
  { name: 'United States'},
  { name: 'Canada'}
]

const teams = [
  {name: 'Bulls', city: 'Chicago', conference: 'Eastern', division: 'Central', numplayers: 12},
  {name: 'Warriors', city: 'San Francisco', conference: 'Western', division: 'Pacific', numplayers: 12},
  {name: 'Lakers', city: 'Los Angeles', conference: 'Western', division: 'Pacific', numplayers: 12},
  {name: 'Timberwolves', city: 'Minneapolis', conference: 'Western', division: 'Northwest', numplayers: 12},
  {name: 'Jazz', city: 'Salt Lake City', conference: 'Western', division: 'Northwest', numplayers: 12}
]

// const eraz = [
//   {time: [2010, 2018]},
//   {time: [2000, 2010]},
//   {time: [1990, 2000]},
//   {time: [1980, 1990]},
//   {time: [1970, 1980]}
// ]

module.exports = {
  players,
  countries,
  teams,
}