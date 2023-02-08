using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_4.Models
{
    public class CalculatorModel
    {
        [Required(ErrorMessage = "Assignment Score is Missing")]
        [Range(0, 100, ErrorMessage = "The value Assignment must be between 0 and 100.")]
        public float Assignment { get; set; }

        [Required(ErrorMessage = "Quiz Score is Missing")]
        [Range(0, 100, ErrorMessage = "The value Quiz must be between 0 and 100.")]
        public float Quiz { get; set; }

        [Required(ErrorMessage = "Group Project Score is Missing")]
        [Range(0, 100, ErrorMessage = "The value Group Project must be between 0 and 100.")]
        public float Group_Project { get; set; }

        [Required(ErrorMessage = "Midterm Score is Missing")]
        [Range(0, 100, ErrorMessage = "The value Midterm must be between 0 and 100.")]
        public float Midterm { get; set; }

        [Required(ErrorMessage = "Final Score is Missing")]
        [Range(0, 100, ErrorMessage = "The value Final must be between 0 and 100.")]
        public float Final { get; set; }

        [Required(ErrorMessage = "Intex Score is Missing")]
        [Range(0, 100, ErrorMessage = "The value Intex must be between 0 and 100.")]
        public float Intex { get; set; }
       
    }
}
