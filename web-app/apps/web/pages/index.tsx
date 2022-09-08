import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import apolloClient from 'services/Apollo';
import { gql } from '@apollo/client';
import { CompanyMock } from 'services/CompanyMock';
import CompaniesMock from 'services/CompaniesMock';
import { useRouter } from 'next/router';
import { orderBy } from 'lodash';
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

export async function getServerSideProps() {
  // const { data } = await apolloClient.query({
  //   query: gql`
  //   query Query {
  //     companies {
  //       id
  //       name
  //       sector
  //       country
  //       full_time_employees
  //       compensation_risk
  //       audit_risk
  //       board_risk
  //       overall_risk
  //       long_business_summary
  //       city
  //       state
  //       website
  //     }
  //   }
  //   `,
  // });

  const data = CompaniesMock;

  return {
    props: { data },
  };
}

type Mock = typeof CompanyMock.company;

const Line = () => {
  return (
    <motion.div
      className="h-2 bg-black mx-20 my-20 rounded-xl"
      initial={{ width: '0%' }}
      whileInView={{ width: '90%' }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    />
  );
};

const Home: NextPage = ({ data }: { data: Array<Mock> }) => {
  const router = useRouter();
  return (
    <div className="overflow-hidden">
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="absolute bg-red-500 w-screen max-w-full h-screen -z-10 overflow-hidden">
          <img
            src="iso.jpg"
            alt=""
            className="w-full h-full blur-xl scale-125"
          />
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0.1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className="text-8xl font-bold text-gray-100"
        >
          Stock-App
        </motion.div>
        <motion.div
          className="text-xl mt-2 text-gray-100"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.7 }}
        >
          Visualizador de datos financieros
        </motion.div>
      </div>

      <div className="flex items-center flex-col">
        <div className="flex w-[90%] flex-col ml-20 ">
          <Line />
          <span className=" text-6xl flex mb-8">Estadísticas</span>
          {orderBy(data, ['overall_risk'], ['asc']).map(company => (
            <li>{company.overall_risk}</li>
          ))}

          <TableContainer>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>

          <Line />
          <span className=" text-6xl flex mb-8">Listado de compañías</span>
          {data.map(company => (
            <li
              className="hover:text-blue-500 hover:cursor-pointer hover:underline hover:italic transition-all text-xl"
              onClick={() => router.push(`/${company.id}`)}
            >
              {company.name} ({company.id})
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
