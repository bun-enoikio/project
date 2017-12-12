import React, { Component } from 'react';
import styled from 'styled-components';
import { MainStore } from '../stores/mainStore';
import { typedInject } from '../stores/util';
import { Grid, Header, Accordion } from 'semantic-ui-react';
const MainGrid = styled.div `
  border: 2px solid #464646;
  border-radius: 5px;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 0 !important;
  .main-header {
    background-color: #464646;
    text-align: center;
    padding: 10px 0;
    h3 {
      color: white;
    }
  }
  .row-content {
    padding: 25px;
  }
  p {
    font-size: 17px;
    line-height: 2;
  }
  p.accordion-question {
    color: blue !important;
    text-decoration: underline !important;
    cursor: pointer;
  }
`;
interface Props {
  mainStore: MainStore;
}
class TakataAirBagContainer extends Component <Props, {}> {
  state = {activeIndex: 0};
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({activeIndex: newIndex});
  }
  render () {
    const { activeIndex } = this.state;
    return (
      <Grid container columns={1}>
        <Grid.Column as={MainGrid}>
          <div className="main-header">
            <Header as="h3">TAKATA AIR BAG INFLATOR</Header>
          </div>
          <Grid.Column className="row-content">
            <Accordion>
              <Accordion.Title active={activeIndex ===1} index={1} onClick={this.handleClick}>
                <p className="accordion-question">What is the issue?</p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===1}>
                <p>
                  In these vehicles, the propellant in the driver and/or passgener frontal air bag inflators may
                  degrade after prolonged exposure to high absolute humidity and fluctuating temperatures.
                  Degradeed propellant can cause inflator rupture during airbag deployment. In the event of an
                  inflator rupture, metal fragments could pass through the airbag cushion material, striking the vehicle occupants,
                  and result in serious injury or death.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===2} index={2} onClick={this.handleClick}>
                <p className="accordion-question">
                  Has Mazda had any accidents, injuries, or deaths reported as a result of this condition?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===2}>
                <p>
                  Mazda is aware of several individuals who have been injured as a result of this condition in Mazda vehicles.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===3} index={3} onClick={this.handleClick}>
                <p className="accordion-question">
                  I was in an accident and my air bag didn’t deploy; is this related to the recall?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===3}>
                <p>
                  No. The criterion for the air bag deployment does not change. The air bags are designed to deploy in only certain types of collisions as explained in the Owner’s Manual.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===4} index={4} onClick={this.handleClick}>
                <p className="accordion-question">
                  My air bag light is on; is this related to the recall?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===4}>
                <p>
                  No, the air bag indicator light does not alert you of this condition.
                  If your air bag indicator light comes on, please bring your vehicle to an authorized Mazda Dealer for diagnosis.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===5} index={5} onClick={this.handleClick}>
                <p className="accordion-question">
                  I am afraid to drive my vehicle.
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===5}>
                <p>
                  Based on independent investigations and NHTSA’s independent expert, NHTSA has concluded
                  that the non-desiccated frontal Takata airbag inflators do not pose an unreasonable risk
                  to safety until they reach a certain level of propellant degradation. NHTSA and Takata are
                  prioritizing the expanded inflator recalls based on when involved inflators are more likely
                  to pose an unreasonable risk to safety, considering time, temperature, and environmental moisture,
                  which depends on a vehicle’s location (see map below).
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===6} index={6} onClick={this.handleClick}>
                <p className="accordion-question">
                  What part of the air bag is being replaced?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===6}>
                <p>
                  Only the air bag inflator is under recall, and the replacement part addresses the original
                  safety concerns from the recall.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===7} index={7} onClick={this.handleClick}>
                <p className="accordion-question">
                  How do I get my vehicle repaired? How much will the repair cost?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===7}>
                <p>
                  A Mazda Dealer will replace the affected air bag inflator and remedy the issue free
                  of charge. Please schedule an appointment with your nearest authorized Mazda Dealer
                  for parts reservation and repair.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===8} index={8} onClick={this.handleClick}>
                <p className="accordion-question">
                  My air bag has been repaired in the past; will I need to get it repaired again? Will Mazda reimburse me for this?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===8}>
                <p>
                  If you had an interim air bag inflator installed under any Takata safety recall,
                  you will need to bring your vehicle to an authorized Mazda Dealer for the permanent
                  repair, which will be done free of charge. In order ensure you have the latest
                  air bag inflator installed, it is best to bring your vehicle to an authorized Mazda Dealer.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===9} index={9} onClick={this.handleClick}>
                <p className="accordion-question">
                  I’ve heard of an airbag inflator from Autoliv or TRW, how is this different than a Takata airbag inflator?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===9}>
                <p>
                  Autoliv and TRW parts use guanidine nitrate as the air bag inflator propellant
                  material, whereas Takata inflators use phase-stabilized ammonium nitrate (“PSAN”).
                  The change to Autoliv and TRW inflator parts is a decision by Mazda to no longer
                  use inflator parts based on phase-stabilized ammonium nitrate.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===10} index={10} onClick={this.handleClick}>
                <p className="accordion-question">
                  Why did Mazda change from using the Takata airbag inflator to an airbag inflator manufactured by Autoliv or TRW?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===10}>
                <p>
                  Mazda made the change to alternate suppliers Autoliv and TRW because Mazda decided that it would be
                  best to stop using air bag inflators made from phase-stabilized ammonium nitrate (“PSAN”).
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===11} index={11} onClick={this.handleClick}>
                <p className="accordion-question">
                  Why are desiccated inflators not currently being recalled like the non-desiccated Takata inflators?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===11}>
                <p>
                  Takata produced desiccated inflators are currently undergoing testing by various
                  qualified engineering companies to determine whether they pose a risk to safety.
                  Results will be evaluated by NHTSA and a determination made by early 2020.
                  If testing results show there is a safety concern prior to this date,
                  a determination will be made and appropriate actions taken in response.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===12} index={12} onClick={this.handleClick}>
                <p className="accordion-question">
                  How do I schedule a repair appointment? How long will the repair take?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===12}>
                <p>
                  We understand your time is valuable. Scheduling an appointment ahead of
                  time with an authorized Mazda Dealer will allow an opportunity to reserve
                  the necessary replacement part for your vehicle and help minimize your wait
                  time and inconvenience. A new air bag inflator will take approximately one hour
                  to install.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===13} index={13} onClick={this.handleClick}>
                <p className="accordion-question">
                  Are parts currently available?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===13}>
                <p>
                  Mazda is continuously working with the supplier to ensure that sufficient 
                  replacement parts are available for affected vehicles. Please use the VIN search
                  function above to check your recall status:
                </p>
                <ul>
                  <li>
                    A “Recall Incomplete” status means a replacement part is available for your vehicle.
                    Please schedule an appointment with an authorized Mazda Dealer for parts reservation and repair.
                  </li>
                  <li>
                    A “Recall Incomplete Remedy Not Yet Available” status means a replacement part
                    is not yet available for your vehicle, please continue to check back as well as look for further
                    communications from Mazda concerning parts availability. You can also register on mazdarecallinfo.com
                    to receive recall notices via email for your specific Mazda vehicle.
                  </li>
                  <li>
                    A “Repair Completed” status means your recall has been completed. However,
                    please continue to utilize the VIN search function above to keep current on recalls for your vehicle.
                  </li>
                </ul>
              </Accordion.Content>
              
              <Accordion.Title active={activeIndex ===13} index={13} onClick={this.handleClick}>
                <p className="accordion-question">
                  How will the dealer repair the vehicle?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===13}>
                <p>
                  Dealers will install a new frontal air bag inflator containing a desiccant material
                  that helps limit moisture absorption by the inflator’s propellant material.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===14} index={14} onClick={this.handleClick}>
                <p className="accordion-question">
                  I already had my air bag inflator replaced. Will I get another recall notice?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===14}>
                <p>
                  If you had an interim air bag inflator repair performed, the new inflator will not
                  experience propellant degradation for at least six years (see propellant degradation
                  time by Zone below). Before that time, you will receive another notice by first class
                  mail from Mazda to bring in your vehicle for the permanent remedy inflator. In order to
                  ensure you have the latest air bag inflator installed, please contact an authorized Mazda Dealer.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===15} index={15} onClick={this.handleClick}>
                <p className="accordion-question">
                  I was in an accident and my air bag didn’t deploy. Could this be related?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===15}>
                <p>
                  No. The criterion for air bag deployment does not change. As explained in the Owner’s Manual,
                  the air bags are designed to deploy in only certain types of collisions.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===16} index={16} onClick={this.handleClick}>
                <p className="accordion-question">
                  Does this apply to all the air bags in my vehicle?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===16}>
                <p>
                  This recall applies only to certain driver and/or passenger frontal air bags
                  on the affected vehicles.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===17} index={17} onClick={this.handleClick}>
                <p className="accordion-question">
                  I already paid for air bag replacement on my vehicle. Will Mazda reimburse me for this?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===17}>
                <p>
                  Since this concern is only present in the event of an air bag deployment,
                  reimbursement for air bag replacement repairs will not be offered.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===18} index={18} onClick={this.handleClick}>
                <p className="accordion-question">
                  My vehicle is affected by the Takata Airbag Inflator recall, are parts available for repair?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===18}>
                <p>
                  Please see the table below to find your Mazda vehicle and model year.
                </p>
                <p>
                  Note: This information is up to date as of September 2017.
                  Please use the VIN search function at the top of the page for the most up to date information.
                </p>
                (list of table)
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===19} index={19} onClick={this.handleClick}>
                <p className="accordion-question">
                  What actions has Mazda taken to communicate to affected customers?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===19}>
                <p>
                  Your safety is very important to us and it is our mission to actively
                  communicate all information related to the recall to our customers.
                  If your vehicle is involved in any safety recall, a letter detailing the recall
                  will be sent to you from Mazda by USPS First Class Mail.
                </p>
                (list of table)
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===20} index={20} onClick={this.handleClick}>
                <p className="accordion-question">
                  When will Mazda begin the owner notification?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===20}>
                <p>
                  The Map
                </p>
                (list of table)
              </Accordion.Content>

              <Accordion.Title active={activeIndex ===21} index={21} onClick={this.handleClick}>
                <p className="accordion-question">
                  How can I get more information regarding the recall?
                </p>
              </Accordion.Title>
              <Accordion.Content active={activeIndex ===21}>
                <p>
                  If you have any questions regarding this recall, our Customer Experience Center Representatives are here to
                  help Monday-Friday, 5:00 a.m. to 6:00 p.m., Pacific Time; Saturday 7:00 a.m. to 3:00 p.m., Pacific Time.
                </p> 
                <p>Start chat now</p>  
                <p>
                  If chat is currently unavailable, you may also contact us by e-mail or call (800) 222-5500, option #6.
                </p>
               </Accordion.Content>
            </Accordion>  
            <p>
            More information regarding the recall can be obtained from the National Highway
            Traffic Safety Administration (NHTSA) by visiting https://www.safercar.gov.
            If Mazda or its dealers do not repair the defect free of charge and within a reasonable
            amount of time, you may notify NHTSA at 1200 New Jersey Ave., SE., Washington, DC 20590;
            or, call the toll-free Vehicle Safety Hotline at 1-888-327-4236 (TTY: 1-800-424-9153).
            </p>
          </Grid.Column> 
        </Grid.Column>   
      </Grid>  
    );
  }
}

export default typedInject('mainStore')(TakataAirBagContainer);