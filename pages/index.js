import Head from 'next/head'
import Card from '../components/Card'
import Preview from '../components/Preview'

export default function Home({ punks }) {
  const random = Math.floor(Math.random() * punks?.length)

  return (
    <div>
      <Preview 
        punk={punks[random]}
      />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 bg-[#121921]'>
        {punks?.map(punk => (
          <Card key={punk.id} punk={punk} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const data = await fetch("https://testnets-api.opensea.io/assets?asset_contract_address=0xFd6e720aAd40a5149E6b4006E48Dc8bf74f7b431")
                .then(res => res.json())
                .then(res => res.assets)

  return {
    props: {
      punks: data
    }
  }
  
}