import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import apolloClient from 'services/Apollo';
import { gql } from '@apollo/client';
import { CompanyMock } from 'services/CompanyMock';
import CompaniesMock from 'services/CompaniesMock';
import { useRouter } from 'next/router';
import { orderBy } from 'lodash';
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useState } from 'react';

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
  const [field, setField] = useState('name');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const router = useRouter();

  const handleTable = (newField: string) => {
    if (field !== newField) {
      setField(newField);
      setOrder('asc');
    } else {
      setOrder('desc');
      if (order === 'desc') {
        setOrder('asc');
      }
    }
  };

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.7 }}
        >
          Visualizador de datos financieros
        </motion.div>
      </div>

      <div className="flex items-center flex-col">
        <div className="flex w-[90%] flex-col ml-20 ">
          <Line />
          <span className=" text-6xl flex mb-8">Compañías</span>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>
                Haga click en el titulo de la columna para ordenar
              </TableCaption>
              <Thead>
                <Tr>
                  <Th
                    onClick={() => handleTable('name')}
                    className="hover:text-blue-500 cursor-pointer hover:underline hover:italic"
                  >
                    Compañía
                  </Th>
                  <Th
                    onClick={() => handleTable('sector')}
                    className="hover:text-blue-500 cursor-pointer hover:underline hover:italic"
                  >
                    Sector
                  </Th>
                  <Th
                    onClick={() => handleTable('city')}
                    className="hover:text-blue-500 cursor-pointer hover:underline hover:italic"
                  >
                    Ubicación
                  </Th>
                  <Th
                    isNumeric
                    onClick={() => handleTable('full_time_employees')}
                    className="hover:text-blue-500 cursor-pointer hover:underline hover:italic"
                  >
                    Empleados
                  </Th>
                  <Th
                    isNumeric
                    onClick={() => handleTable('overall_risk')}
                    className="hover:text-blue-500 cursor-pointer hover:underline hover:italic"
                  >
                    Riesgo
                  </Th>
                  <Th>Ver detalles</Th>
                </Tr>
              </Thead>
              <Tbody>
                {orderBy(data, [field], [order]).map(company => (
                  <Tr key={company.id} className="hover:bg-gray-100 transition-all">
                    <Td>
                      {company.name} ({company.id})
                    </Td>
                    <Td>{company.sector}</Td>
                    <Td>
                      {company.city} ({company.state}), {company.country}
                    </Td>
                    <Td isNumeric>{company.full_time_employees}</Td>
                    <Td isNumeric>{company.overall_risk}</Td>
                    <Td
                      onClick={() => router.push(`/${company.id}`)}
                      className="flex items-center justify-center cursor-pointer hover:scale-150 transition-all"
                    >
                      📰
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th
                    onClick={() => handleTable('name')}
                    className="hover:text-blue-500 cursor-pointer hover:underline hover:italic"
                  >
                    Compañía
                  </Th>
                  <Th
                    onClick={() => handleTable('sector')}
                    className="hover:text-blue-500 cursor-pointer hover:underline hover:italic"
                  >
                    Sector
                  </Th>
                  <Th
                    onClick={() => handleTable('city')}
                    className="hover:text-blue-500 cursor-pointer hover:underline hover:italic"
                  >
                    Ubicación
                  </Th>
                  <Th
                    isNumeric
                    onClick={() => handleTable('full_time_employees')}
                    className="hover:text-blue-500 cursor-pointer hover:underline hover:italic"
                  >
                    Empleados
                  </Th>
                  <Th
                    isNumeric
                    onClick={() => handleTable('overall_risk')}
                    className="hover:text-blue-500 cursor-pointer hover:underline hover:italic"
                  >
                    Riesgo
                  </Th>
                  <Th>Ver detalles</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>

          <Line />
        </div>
      </div>
    </div>
  );
};

export default Home;
