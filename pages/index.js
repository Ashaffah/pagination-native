import Head from "next/head";
import React, { Component } from "react";
import styles from "/styles/Home.module.css";
/* 
  
  =======================================
  =======================================
  <<<THIS FILE IS FOR LEARNING PURPOSE>>>
  =======================================
  =======================================
  
  */
class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    active: 1,
  };

  // componentDidMount() {
  //   const { getHome } = this.props;
  //   // getHome("128", (status) => {});
  // }
  render() {
    // LOGIC
    const { active } = this.state;
    let pagination = [
      // DUMMY DATA
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    ];
    let paginationFirst = [1, 2, 3, 4, 5, 6];
    let paginationSet = [3, 4, 5, 6, 7];
    let paginationEnd = [];
    for (let i = pagination.length - 6; i < pagination.length + 1; i++) {
      paginationEnd.push(i);
    }

    let paginationList = [];

    if (active < 4) {
      paginationList = paginationFirst;
    }
    if (active >= 4) {
      paginationList = paginationSet;
    }
    if (active > 5) {
      let temp = [];
      for (let i = active - 2; i < active + 3; i++) {
        temp.push(i);
      }
      paginationList = temp;
    }
    if (active > pagination.length - 4) {
      paginationList = paginationEnd;
    }

    console.log("paginationList", paginationList);
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description + " mb-6"}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>
          {/* <Card /> */}

          <div className="mt-10">
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <div
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => {
                  this.setState({ active: active - 1 });
                }}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                </svg>
              </div>

              {active >= 4 && (
                <>
                  <div
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    onClick={() => {
                      this.setState({ active: 1 });
                    }}
                  >
                    {" "}
                    1{" "}
                  </div>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    {" "}
                    ...{" "}
                  </span>
                </>
              )}

              {paginationList.map((val, index) => (
                <div
                  key={index}
                  className={`${
                    active == val
                      ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                  } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                  onClick={() => {
                    this.setState({ active: val });
                  }}
                >
                  {" "}
                  {val}{" "}
                </div>
              ))}

              {active < pagination.length - 3 && (
                <>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    {" "}
                    ...{" "}
                  </span>
                  <div
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    onClick={() => {
                      this.setState({ active: pagination.length });
                    }}
                  >
                    {" "}
                    {pagination.length}{" "}
                  </div>
                </>
              )}

              <div
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => {
                  this.setState({ active: active + 1 });
                }}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              </div>
            </nav>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className="flex items-center">
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
