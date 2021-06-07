import React from 'react';
export default class City extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        centers: []
      };
    }
  
    componentDidMount() {
      fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=214&date=31-05-2021")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              centers: result.centers
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, centers } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <table>
            {centers.map(item => (
              <tr>

                  <td>
                {item.name}
                </td>
                <td>
                    {item.center_id}
                </td>
                <td>
                    {item.address}
                </td>
                </tr>
            ))}
          </table>
        );
      }
    }
  }