
// Pick-A-Log List

const VI = document.getElementById('VehicleInfor');
const MAN = document.getElementById('VehicleMan');
const VF = document.getElementById('VehicleFuel');
const VR = document.getElementById('VehicleRegis');
const VINS = document.getElementById('VehicleInsur');
const VA = document.getElementById('VehicleAcci');


// LOGS
const VehicleInformation = document.getElementById('VehicleInformation');
const MaintenanceAndRepairRecords = document.getElementById('MaintenanceAndRepairRecords');
const FuelRecord = document.getElementById('FuelRecord');
const VehicleRegistration =document.getElementById('VehicleRegistration');
const Insurance = document.getElementById('InsuranceRecords');
const AccidentRecords = document.getElementById('AccidentRecords');


        // OVERALL REFRESH PAGE

        // const refreshBtn = document.querySelectorAll('fa-arrows-rotate');
        // refreshBtn.addEventListener('click', () => {location.reload()})

//////////////////////////////////////////////////////////////

    // VEH IN
      // APPEAR DISAPPEAR 
        document.getElementById('VehicleInfor').addEventListener('click', () => {
            const field = document.getElementById('VehicleInformation');
            field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';

            tst.style.display = 'none';


         
        });  
        // DELETE
        const tst = document.getElementById('fa-trash-can-xmark');
       
        tst.addEventListener('click', () =>{
        const de = document.getElementById('VehicleInformation');
             de.addEventListener('click', () => {location.reload()})   
        });

        // ADD
       const add = document.getElementById('fa-circle-plus');
        add.addEventListener('click', () => {
         
            const list = document.createElement("div");
           const addConatiner = document.getElementById('VehicleInformation');

            list.appendChild(addConatiner);
            document.getElementById('AddOrDeleteContainer').appendChild(list);

            tst.style.display = 'block';
            add.style.display = "none"

                })


////////////////////////////////////////////////////////////////////
          // MAINTENANCE 
          document.getElementById('VehicleMan').addEventListener('click', () => {
            const field = document.getElementById('MaintenanceAndRepairRecords');
            field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
            })

              // DELETE
        const tst1 = document.getElementById('fa-trash-can-xmark2');
       
        tst1.addEventListener('click', () =>{
        const de2 = document.getElementById('MaintenanceAndRepairRecords');
             de2.addEventListener('click', () => {location.reload()})   
        });

        // ADD
       const add2 = document.getElementById('fa-circle-plus2');
        add2.addEventListener('click', () => {
         

            const list2 = document.createElement("div");
           const addConatiner2 = document.getElementById('MaintenanceAndRepairRecords');

            list2.appendChild(addConatiner2);
            document.getElementById('AddOrDeleteContainer').appendChild(list2);

            tst1.style.display = 'block';
            add2.style.display = "none";

        });

             
    
        
/////////////////////////////////////////////////////////////////////
        // FUEL
        document.getElementById('VehicleFuel').addEventListener('click', () => {
            const field = document.getElementById('FuelRecord');
            field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';

        }); 
    

        // REGISTRATION
    document.getElementById('VehicleRegis').addEventListener('click', () => {
        const field = document.getElementById('VehicleRegistration');
        field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';

    }); 
        // INSURANCE
    document.getElementById('VehicleInsur').addEventListener('click', () => {
        const field = document.getElementById('InsuranceRecords');
        field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';

    }); 
        //ACCIDENTS
    document.getElementById('VehicleAcci').addEventListener('click', () => {
        const field = document.getElementById('AccidentRecords');
        field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';

    }); 




    /**
     * 
     * 
     * 
     * 
     * NAV BAR
     * 
     * 
     * 
     * 
     */

    // document.getElementById('ProofOfRelationship').addEventListener('click', () => {
    //     const field = document.getElementById('ProofOfRelationshipField');
    //     field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    // });


    const faBars = document.getElementById('fa-bars');
    const faArrowUp = document.getElementById('fa-arrow-up')

    faBars.addEventListener('click', ()=>{
            const MoreMenu =  document.getElementById('MoreMenu');
            const faArrowUp = document.getElementById('fa-arrow-up');

            faBars.style.display = 'none';
            MoreMenu.style.display = 'block';
            faArrowUp.style.display = 'block';

            setTimeout(() => {
                MoreMenu.style.display = 'none';
                faArrowUp.style.display = 'none';
                faBars.style.display = 'block';

            }, 10000);

    })


     /**
      * 
      * 
      * 
      * 
      * 
      * 
      * 
      * 
      * 
      * TAX RECORD KEEPING
      * 
      * 
      * 
      * 
      * 
      * 
      * 
      * 
      */
        /**
         * 
         * 
         *  Proof of Relationship Display
         * 
         */
        document.getElementById('ProofOfRelationship').addEventListener('click', () => {
            const field = document.getElementById('ProofOfRelationshipField');
            field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
        });
        /***
         * 
         * 
         * Proof of Identity Display
         * 
         */
        document.getElementById('ProofOfIdentity').addEventListener('click', () => {
            const field = document.getElementById('ProofOfIdentityField');
            field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
        });
        /***
         * 
         * Proof of Residency (For Children)
         * 
         * 
         */
        document.getElementById('ProofOfResidency').addEventListener('click', () => {
            const field = document.getElementById('ProofOfResidencyField');
            field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
        });
    

    /**
     * 
     * 
     * Proof of Financial Support (For Relatives or Elder Dependents)
     * 
     * 
     */
    document.getElementById('ProofOfFinancialRecords').addEventListener('click', () => {
        const field = document.getElementById('ProofOfFinancialRecordsField');
        field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    });
    /**
     * 
     * 
     * Child Care Expense
     * 
     * 
     * 
     */
   document.getElementById('ChildCareExpenses').addEventListener('click', () => {
    const field = document.getElementById('ChildCareExpensesField');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
});
    /**
     * 
     * 
     * Medical Expenses
     * 
     * 
     */
   document.getElementById('MedicalExpenses').addEventListener('click', () => {
    const field = document.getElementById('MedicalExpensesField');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
});
    /**
     * 
     * 
     * Education Expenses
     * 
     * 
     */ 
  document.getElementById('EducationExpenses').addEventListener('click', () => {
    const field = document.getElementById('EducationExpensesField');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
});
    /***
     * 
     * 
     * 
     * Alimony and Child Support
     * 
     * 
     */
   document.getElementById('AlimonyAndChildSupport').addEventListener('click', () => {
    const field = document.getElementById('AlimonyAndChildSupportField');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
});
    /**
     * 
     * 
     * 
     * Legal Document (If applicable)
     * 
     * 
     */
 document.getElementById('LegalDocuments').addEventListener('click', () => {
    const field = document.getElementById('LegalDocumentsField');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
});
    /**
     * 
     * 
     * Support Provided for Dependent (For non-children Dependents)
     * 
     * 
     */
   document.getElementById('SupportProvidedDependts').addEventListener('click', () => {
    const field = document.getElementById('SupportProvidedDependtsField');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
});



/**
 * 
 * 
 *  ADD OR DELETE A LOG
 * 
 * 
 * 
 */
