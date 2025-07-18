import { useQuery } from "@apollo/client"
import { GET_EPISODES } from "@/graphql/queries"
import { EpisodeProps } from "@/interfaces"
import EpisodeCard from "@/components/common/EpisodeCard"
import { useEffect, useState } from "react"
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';


const Home: React.FC = () => {

  const [page, setPage] = useState<number>(1)
  const { loading, error, data, refetch } = useQuery(GET_EPISODES, {
    variables: {
      page: page
    }
  })

  useEffect(() => {
    refetch()
  }, [page, refetch])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  const results = data?.episodes.results
  const info = data?.episodes.info

  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
}

export default Home