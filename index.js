
//get all prime numbers less than a given num, in development will need extra validations
//to ensure num given is an integer 
const isPrime = (num) => {
  if (num === 2){
    return true
  } 
  if ( num < 2 || num % 2 === 0 ){
    return false
  }
  for(let i=2; i<num-1; i++){
    if ( num%i === 0 ){
      return false
    }
  }
  return true
}

const returnAllPrimes = (maxNum) => {
  let primes = []
  for(let i=2; i<maxNum-1; i++){
    if (isPrime(i)) {
    primes.push(i)
    }
  }
  return primes
}

//get movie titles from API
const getMovieTitles = async (substr) => {
  const res = await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`)
  const movies = await res.json()
  const titles = []
    for (let i=1; i<=movies.total_pages; i++){
      let res1 = await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${i}`)
      let movies2 = await res1.json()
      movies2.data.forEach(movie => titles.push(movie.Title))
    }
    return titles.sort()
}

  
//sql query for top three high scorers
SELECT id, name
FROM students
ORDER BY score DESC, name ASC
LIMIT 3

//idempotent methods that give same response regardless of times invoked
GET,
HEAD,
PUT

//valid server response formats
XML,
JSON,
CSV

//restricted/unauthorized codes
401
403

//401 response code
c. When the provided Credentials does not have necessary permissions for the resource


//SQL query 
SELECT uin, name
FROM employee, employee_uin
WHERE employee.id = employee_uin.id && employee.age<25
ORDER BY employee.name ASC, employee_uin.uin ASC