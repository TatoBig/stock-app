import React, { useEffect, useState } from 'react';
import { CompanyMock } from 'services/CompanyMock';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Button } from '@chakra-ui/react';
import apolloClient from 'services/Apollo';
import { gql } from '@apollo/client';

export async function getServerSideProps({
  query,
}: {
  query: { ticker: string };
}) {
  const { ticker } = query;
  const { data } = await apolloClient.query({
    query: gql`
    query Query {
      company(ticker: "${ticker}") {
        id
        name
        sector
        country
        full_time_employees
        compensation_risk
        audit_risk
        board_risk
        overall_risk
        long_business_summary
        city
        state
        website
        HistoricalData {
          open
          high
          volume
          date
        }
      }
    }
    `,
  });

  return {
    props: { data },
  };
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

type Mock = typeof CompanyMock;

const Ticker = ({ data }: { data: Mock }) => {
  const [option, setOption] = useState('open');

  useEffect(() => {
    console.log(data);
  }, [data]);

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Visualización de ${data.company.name} (${data.company.id})`,
      },
    },
  };
  const labels = data.company.HistoricalData.map(entry => entry.date.substring(0, 10));

  const options: any = {
    open: {
      name: 'Open',
      data: data.company.HistoricalData.map(entry => entry.open),
      color: 'rgb(65,105,225)',
    },
    high: {
      name: 'High',
      data: data.company.HistoricalData.map(entry => entry.high),
      color: 'rgb(139,0,0)',
    },
    volume: {
      name: 'Volumen',
      data: data.company.HistoricalData.map(entry => entry.volume),
      color: 'rgb(34,139,34)',
    },
  };

  const test = {
    labels,
    datasets: [
      {
        label: options[option].name,
        data: options[option].data,
        borderColor: options[option].color,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Button onClick={() => setOption('open')}>Open</Button>
      <Button onClick={() => setOption('high')}>High</Button>
      <Button onClick={() => setOption('volume')}>Volume</Button>
      <Line options={options} data={test} />
    </div>
  );
};

export default Ticker;
